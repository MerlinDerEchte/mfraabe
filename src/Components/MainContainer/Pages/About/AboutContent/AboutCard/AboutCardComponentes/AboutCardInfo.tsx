import react from 'react';
import { createAboutCardInfoStyles } from './AboutCardInfoStyles';



export const AboutCardInfo:react.FC<{}> = () => {

    const aboutCardInfoStyles = createAboutCardInfoStyles();
    return(
        <div className={aboutCardInfoStyles}>
            <p>Merlin Raabe</p>
            <p>Kiliansplatz 6<br></br> 80339 München</p>
            <p>merlinraabe@yahoo.de</p>
        </div>
    )
}