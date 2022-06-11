import react from 'react';
import { AboutContent } from './AboutContent/AboutContent';
import { AboutContentBorderTop, AboutContentBorderRight, AboutContentBorderBottom, AboutContentBorderLeft } from './AboutContentBorder/AboutContentBorderLeft';
import { EAboutTypes } from '../../../../../Types/EAboutTypes';
export const AboutContentWrapper:react.FC<{}> = ()=> {

  
      
    return(
        <>
            <AboutContentBorderTop />
            <AboutContentBorderRight />
            <AboutContentBorderBottom />
            <AboutContentBorderLeft />
            <AboutContent title={EAboutTypes.ABOUT_ME} />
        </>
       
    )

}