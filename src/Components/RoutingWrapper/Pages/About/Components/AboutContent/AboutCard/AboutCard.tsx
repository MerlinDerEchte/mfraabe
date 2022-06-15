import react, { useContext } from 'react';
import { AboutContext } from '../../../AboutContext';
import { getIsOneAboutTypeSelected } from '../../../AboutUtils';
import { AboutCardInfo } from './AboutCardComponentes/AboutCardInfo';
import { AboutCardPhoto } from './AboutCardComponentes/AboutCardPhoto';
import { createAboutCardPhotoWrapperStyles, createAboutCardStyles } from './AboutCardStyles';



export const AboutCard:react.FC<{}> = () => {

    const { selectedAboutType, isSelecting, isDeselecting } = useContext(AboutContext);
    const isOneSelected = getIsOneAboutTypeSelected(selectedAboutType);
    const aboutCardStyles = createAboutCardStyles();
    const aboutCardPhotoWrapperStyles = createAboutCardPhotoWrapperStyles();
    return(
    !(isOneSelected || isSelecting || isDeselecting) ?
            <div className={aboutCardStyles}>
                <div className={aboutCardPhotoWrapperStyles}>
                    <AboutCardPhoto />
                    <AboutCardInfo />
                </div>
             </div>
        :
        <>
        </>
     )

}