import { useState } from 'react'
import './App.css'

import TopBar from './Sections/TopBar/TopBar'
import ContentView from './Sections/ContentView/ContentView'

export default function App() {
    const [ breadState, setBreadState ] = useState([
        { name: "Input",      selected: true  },
        { name: "Options",    selected: false },
        { name: "Simulation", selected: false },
        { name: "Result",     selected: false }
    ])

    return (
        <>
            <TopBar bcState={ breadState }/>
            <ContentView></ContentView>
        </>
    )
}
