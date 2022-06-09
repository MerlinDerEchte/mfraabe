import react from 'react';
import { createAboutContentStyles } from './AboutContentStyles';
import { AboutContentBorderTop, AboutContentBorderRight, AboutContentBorderBottom, AboutContentBorderLeft } from './AboutContentBorder/AboutContentBorderLeft';
export const AboutContent:react.FC<{}> = ()=> {

    const aboutContentStyles = createAboutContentStyles();
    
    return(
        <div >
            <AboutContentBorderTop />
            <AboutContentBorderRight />
            <AboutContentBorderBottom />
            <AboutContentBorderLeft />
        </div>
       
    )

}