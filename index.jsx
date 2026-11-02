import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './src/App'

// Get the root element (#app)
const rootElement = document.getElementById('app')
if (!rootElement)
    throw new Error('Root element (div#app) is not found.')

// Create the root
const root = createRoot(rootElement)

// Render the application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
