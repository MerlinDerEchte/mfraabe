import react, { useContext } from 'react';
import { EAboutTypes } from '../../../../../../Types/EAboutTypes';
import { AboutContext } from '../../AboutContext';
import { getIsSelected } from '../../AboutUtils';
import { createAboutContentStyles } from './AboutContentStyles';



export const AboutContent:react.FC<{title:EAboutTypes}> = ({title}) => {
    const {selectedAboutType, isSelecting, isDeselecting} = useContext(AboutContext);
    const isSelected = getIsSelected(selectedAboutType, title);
    const aboutContentStyles = createAboutContentStyles(isSelected, isSelecting, isDeselecting);

    return(
        isSelected ? 
            <div className={aboutContentStyles}>
                <h1>Hobbies</h1>
                 <p>Programming</p>
                 <p>Football</p>
                 <p>Chess</p>
                 <p>Skateboarding</p>
                 <p>Dota2</p> 
                  </div>
            :
            <></>
    )
}