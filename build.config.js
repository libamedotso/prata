import esbuild from 'esbuild'
import process from 'node:process'
import path from 'node:path'
import fs from 'node:fs'
import pug from 'pug'

// We need the package details too
import pkgjson from './package.json' with { type: 'json' }

// Project configuration
const project = {
    buildDir:  'build',
    entryJS:   'index.jsx',
    entryHTML: 'index.pug'
}

// Command to handle
const command = process.argv[ 2 ]

// Importables for esbuild
const importables = [
    '.png', '.svg', '.ttf'
]

// Esbuild configuration
const configuration = {
    logLevel: 'info',
    entryPoints: [project.entryJS],
    outfile: `${project.buildDir}/${pkgjson.name}.js`,
    bundle: true,
    minify: true,
    sourcemap: true,
    jsx: 'automatic',
    alias: {
        '@assets': './assets'
    },
    loader: {
        // Importables
        ...Object.fromEntries(importables.map(e => [e, 'dataurl']))
    },
    define: {
        PROJECT_NAME:     JSON.stringify(pkgjson.name),
        PROJECT_DNAME:    JSON.stringify(pkgjson.displayName),
        PROJECT_DESC:     JSON.stringify(pkgjson.description),
        PROJECT_AUTHOR:   JSON.stringify(pkgjson.author),
        PROJECT_SOURCE:   JSON.stringify(pkgjson.homepage),
        PROJECT_VERSION:  JSON.stringify(pkgjson.version),
        PROJECT_KEYWORDS: JSON.stringify(pkgjson.keywords)
    }
}

// Create the build folder
fs.mkdirSync(project.buildDir, { recursive: true })

// Copy the logo
fs.cpSync("assets/logo.png", `${project.buildDir}/logo.png`)

// Build the index file
const templateDefs = {
    PROJECT_NAME:     pkgjson.name,
    PROJECT_DNAME:    pkgjson.displayName,
    PROJECT_DESC:     pkgjson.description,
    PROJECT_AUTHOR:   pkgjson.author,
    PROJECT_SOURCE:   pkgjson.homepage,
    PROJECT_VERSION:  pkgjson.version,
    PROJECT_KEYWORDS: pkgjson.keywords.join( ", " ),
    LOGO_FILE:        'logo.png',
    JS_FILE:          `${pkgjson.name}.js`,
    CSS_FILE:         `${pkgjson.name}.css`
}

try {
    let html = pug.renderFile(project.entryHTML, templateDefs)
    fs.writeFileSync(`${project.buildDir}/index.html`,
        html, { encoding: 'utf-8' })
} catch (e) {
    console.error('There was an error while compiling the entry pug file:')
    console.error(e.message)
}

switch (command) {
    case "build":
    case "": esbuild.
        build(configuration).
        catch(e => process.exit(1))
    break

    case "dev": esbuild.
        context(configuration).
        then(async ctx => {
            await ctx.watch()
            await ctx.serve({
                servedir: project.buildDir,
                onRequest: ({ remoteAddress, method, path,
                    status, timeInMS }) => {
                    console.info( status, method, path,
                        'from', remoteAddress, 'in', `${timeInMS}ms!` )
                }
            })
        }).
        catch(e => process.exit(1))
    break
}
