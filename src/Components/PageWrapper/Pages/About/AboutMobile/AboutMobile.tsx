import react from 'react'
import { Page } from '../../Page'
import { AboutCardInfo } from '../Shared/AboutCardComponentes/AboutCardInfo'
import { AboutCardPhoto } from '../Shared/AboutCardComponentes/AboutCardPhoto'
import { AboutMeTemplate } from '../Shared/AboutMeTemplate'
import { aboutMobileStyles } from './AboutMobileStyles'


export const AboutMobile:react.FC<{}> = () => {


    return(
        <Page >

        <div className={aboutMobileStyles}>
            <AboutCardInfo />
            <div className='aboutCardPhotoWrapper'>
                <AboutCardPhoto />
            </div>
            <div className='aboutMeTemplateWrapper'>
                <AboutMeTemplate />
            </div>
        </div>
        </Page>
    )
}