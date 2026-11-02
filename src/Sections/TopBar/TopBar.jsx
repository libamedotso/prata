import S from './TopBar.m.css'

import * as AmeUI from '../../Components/AmeUI/AmeUI'

import PRaTaLogo from '@assets/prata-logo-web.png'
import GithubLogo from '@assets/github.svg'

export default function TopBar({ bcState }) {
    return (
        <div className={ S.TopBar }>
            <AmeUI.FlexRow valign='center' halign='stretch' gap={ AmeUI.FlexGap.Medium }>
                <AmeUI.FlexRow valign='center' halign='start' gap={ AmeUI.FlexGap.Small }>
                    <img
                        className={ S.Logo }
                        src={ PRaTaLogo }
                        alt="PRaTa Logo"
                    />
                    <span className={ S.ProjectDetails }>
                        {PROJECT_DNAME}
                        <sup>{PROJECT_VERSION}</sup>
                    </span>
                    <AmeUI.VDivider/>
                    <a className={ S.Social } href={ PROJECT_SOURCE }>
                        <img src={ GithubLogo } alt="Github Logo" />
                    </a>
                </AmeUI.FlexRow>
                <AmeUI.Breadcrumb crumbs={bcState} />
            </AmeUI.FlexRow>
        </div>
    )
}
