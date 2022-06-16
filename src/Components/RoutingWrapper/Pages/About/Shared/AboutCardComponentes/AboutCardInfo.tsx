import react from 'react';
import { AboutCardInfoTemplate } from '../AboutCardInfo';
import { createAboutCardInfoStyles } from './AboutCardInfoStyles';



export const AboutCardInfo:react.FC<{}> = () => {

    const aboutCardInfoStyles = createAboutCardInfoStyles();
    return(
        <div className={aboutCardInfoStyles}>
          <p>
            Merlin Raabe <br />
            Kiliansplatz 6 <br />
            80339 München
          </p>
          
        </div>
    )
}