// AmeUI, Smol UI package made specifically for Amelia's Web Projects
// Made with love by liblev.so <3 (i lov my wife)

import S from './AmeUI.m.css'

/**
 * A simple vertical divider
 *
 * @returns {React.ReactNode}
 */
export function VDivider() {
    return <div className={ S.VDivider } />
}

/**
 * A simple horizontal divider
 *
 * @returns {React.ReactNode}
 */
export function HDivider() {
    return <div className={ S.HDivider } />
}

/**
 * @enum {string}
 */
export const FlexAlign = {
    Stretch: "stretch",
    Start:   "start",
    Center:  "center",
    End:     "end"
}

/**
 * @enum {string}
 */
export const FlexGap = {
    None:        "0px",
    Small:       "8px",
    Medium:      "16px",
    Large:       "24px",
    Huge:        "32px",
}

/**
 * @typedef {Object} FlexParameters
 * @property {FlexAlign} [halign]
 * @property {FlexAlign} [valign]
 * @property {FlexGap} [gap="0px"]
 */

/**
 * Flex Row
 *
 * @param {FlexParameters}
 * @returns {React.ReactNode}
 */
export function FlexRow({ halign, valign, gap, children }) {
    gap = gap ?? '0px'
    return <div className={ [
        S.FlexRow,
        S[`FlexJustify_${halign || 'start'}`],
        S[`FlexAlign_${valign || 'stretch'}`]
    ].join(' ') } style={{ gap }}>{ children }</div>
}

/**
 * Flex Column
 *
 * @param {FlexParameters}
 * @returns {React.ReactNode}
 */
export function FlexColumn({ halign, valign, gap, children }) {
    gap = gap ?? '0px'
    return <div className={ [
        S.FlexColumn,
        S[`FlexJustify_${valign || 'start'}`],
        S[`FlexAlign_${halign || 'stretch'}`]
    ].join(' ') } style={{ gap }}>{ children }</div>
}

/**
 * @typedef {Object} Crumb
 * @property {string} name
 * @property {boolean} selected
 */

/**
 * @typedef {Object} BreadcrumbParameters
 * @property {Crumb[]} [crumbs]
 */

export function Breadcrumb({ crumbs }) {
    return (
        <FlexRow halign='start' valign='center' gap={ FlexGap.Small }>
            { crumbs.map(e => {
                return (
                    <div className={ S.Crumb } aria-selected={ e.selected ? 'true' : 'false' }>
                        <div className={ S.CrumbPiece }>{ e.name }</div>
                    </div>
                )
            }) }
        </FlexRow>
    )
}
