import react from 'react';
import { createAboutCardPhotoStyles } from './AboutCardPhotoStyles';

export const AboutCardPhoto:react.FC<{}> = () => {


    const photoStyles = createAboutCardPhotoStyles();

    return(
        <div className={photoStyles}>
            <img src='/mfraabe/images/MerlinBalkon.jpg'></img>  
        </div>
    )
}