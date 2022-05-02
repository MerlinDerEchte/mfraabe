import styled from '@emotion/styled';
import react, {MouseEvent, useState} from 'react';
import { AboutMainStyles } from './AboutMainStyles';
import { IPosition } from '../../../../../Types/IPosition';
import { WizzardMenu } from './WizzardMenu/WizzardMenu';
import { MousePositionContext } from './MousePositionContext';

export const AboutMain:react.FC<{}> = () => {
    const [mousePositions, setMousePositions] = useState({
        mouseX:0,
        mouseY:0
    })

    const setAbsoluteMousePositions = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
   
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const mousePositions:IPosition = {
            mouseX,
            mouseY
            };
    
            setMousePositions(
                mousePositions
            )
    
       
    }
    const StyledAboutMain = styled.div(AboutMainStyles) 
    return(
        <StyledAboutMain onMouseOver={setAbsoluteMousePositions}>
            <MousePositionContext.Provider value={mousePositions}>
                <WizzardMenu />
            </MousePositionContext.Provider>
            
        </StyledAboutMain>
    )
}