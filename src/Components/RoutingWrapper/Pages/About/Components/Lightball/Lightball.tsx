import react, { useContext } from 'react';
import { AboutContext } from '../../AboutContext';
import {  getIsOneAboutTypeSelected } from '../../AboutUtils';
import { MousePositionContext } from '../../MousePositionContext';
import { createLightBallStyles } from './LightballStyles';


export const Lightball:react.FC<{}> = ()=>{
    
    const { mousePositions } = useContext(MousePositionContext);
    const { selectedAboutType, isSelecting, isDeselecting } = useContext(AboutContext);
    const isOneSelected = getIsOneAboutTypeSelected(selectedAboutType)
    const lightballStyles = createLightBallStyles(mousePositions.mouseY, isSelecting, isOneSelected, isDeselecting);
    return(
        <div className={lightballStyles}> </div>
    )

} 



