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
            <div className={aboutContentStyles} onMouseOver={e=>e.stopPropagation()}>
                <h1>About myself and coding</h1>
                 <p>
                    As a child i was always fascinated by logical problems.
                    I played lots of chess and strategie games and math was the only subject at school 
                    that i was honestly interested in. 
                    Unfortunately during school i never came in touch with coding this happened only while i was already studying statsics.
                    But i was immediately in love. Coding provides exactly the type of logical challenges i like.
                 </p>
                 <h1>
                     Hobbies
                 </h1>
                 <p>
                     Football:<br />
                     I play football in an amateur division for Sc München Süd.
                 </p>
                 <p>
                     Chess
                 </p>
                 <p>
                     Skateboarding:<br />
                 </p>
                     
                  </div>
            :
            <></>
    )
}