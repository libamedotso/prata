import S from './ContentView.m.css'

import * as AmeUI from '../../Components/AmeUI/AmeUI'

export default function ContentView({ children }) {
    return (
        <div className={ S.View }>
            { children }
        </div>
    )
}
