import react, { useContext } from 'react';
import { AboutContext } from '../../../AboutContext';
import { getIsOneAboutTypeSelected } from '../../../AboutUtils';
import { AboutCardInfo } from '../../../../Shared/AboutCardComponentes/AboutCardInfo';
import { AboutCardPhoto } from '../../../../Shared/AboutCardComponentes/AboutCardPhoto';
import { createAboutCardPhotoWrapperStyles, createAboutCardStyles, createAboutCardTextWrapperStyles } from './AboutCardStyles';



export const AboutCard:react.FC<{}> = () => {

    const { selectedAboutType, isSelecting, isDeselecting } = useContext(AboutContext);
    const isOneSelected = getIsOneAboutTypeSelected(selectedAboutType);
    const aboutCardStyles = createAboutCardStyles();
    const aboutCardPhotoWrapperStyles = createAboutCardPhotoWrapperStyles();
    const aboutCardTextWrapperStyles = createAboutCardTextWrapperStyles();
    return(
        !(isOneSelected || isSelecting || isDeselecting) ?
            <div className={aboutCardStyles}>
                <div className={aboutCardPhotoWrapperStyles}>
                    <AboutCardPhoto />
                </div>
                <div className={aboutCardTextWrapperStyles}>
                    <AboutCardInfo />   
                </div> 
            </div>
            :
            <>
            </>
     )

}