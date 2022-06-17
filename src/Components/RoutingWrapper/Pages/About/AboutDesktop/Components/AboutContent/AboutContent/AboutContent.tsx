import react, { useContext } from 'react';
import { GlobalContext } from '../../../../../../../GlobalContext';
import { EAboutType } from '../../../EAboutType';
import { AboutContext } from '../../../AboutContext';
import { getIsSelected } from '../../../AboutUtils';
import { createAboutContentStyles } from './AboutContentStyles';
import { AboutMeTemplate } from '../../../../Shared/AboutMeTemplate';



export const AboutContent:react.FC<{title:EAboutType}> = ({title}) => {
    const {selectedAboutType, isSelecting, isDeselecting} = useContext(AboutContext);
    const { screenHeight } = useContext(GlobalContext);
    const isSelected = getIsSelected(selectedAboutType, title);
    const aboutContentStyles = createAboutContentStyles({isSelected, isSelecting, isDeselecting, screenHeight});
    
    return(
        isSelected ? 
            <div className={aboutContentStyles} onMouseOver={e=>e.stopPropagation()}>
                <AboutMeTemplate />
            </div>
            :
            <></>
    )
}