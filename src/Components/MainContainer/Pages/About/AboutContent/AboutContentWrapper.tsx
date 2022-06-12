import react from 'react';
import { AboutContent } from './AboutContent/AboutContent';
import { AboutContentBorderTop, AboutContentBorderRight, AboutContentBorderBottom, AboutContentBorderLeft } from './AboutContentBorder/AboutContentBorder';
import { EAboutTypes } from '../../../../../Types/EAboutTypes';
import { AboutCard } from './AboutCard/AboutCard';
export const AboutContentWrapper:react.FC<{}> = ()=> {

    return(
        <>
            <AboutContentBorderTop />
            <AboutContentBorderRight />
            <AboutContentBorderBottom />
            <AboutContentBorderLeft />
            <AboutContent title={EAboutTypes.ABOUT_ME}/>
            <AboutCard />
        </>
       
    )

}