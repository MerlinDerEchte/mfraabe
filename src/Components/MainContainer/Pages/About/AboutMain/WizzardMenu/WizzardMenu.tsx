import styled from '@emotion/styled';
import react from 'react';
import { WizzardMenuStyles } from './WizzardMenuStyles';
import { WizzardSVG } from './Wizzard/WizzardSvg';
import { IPosition } from '../../../../../../Types/IPosition';


export const WizzardMenu:react.FC<{}> = () => {

    const StyledWizzardMenu = styled.div(WizzardMenuStyles);
    const getMenuOffset = ():IPosition => {
        const wizzardMenuWrapper = document.getElementById('wizzardMenu');
        const menuOffsetX = wizzardMenuWrapper?.getBoundingClientRect().left || 0;
        const menuOffsetY = wizzardMenuWrapper?.getBoundingClientRect().top || 0;     
        const menuOffset:IPosition = {
            mouseX: menuOffsetX,
            mouseY: menuOffsetY
        }
        return menuOffset;
    }

    const menuOffset:IPosition = getMenuOffset();
    return(
        <StyledWizzardMenu id ='wizzardMenu'>
            <WizzardSVG offset={menuOffset} />           
        </StyledWizzardMenu>
    )
} 
