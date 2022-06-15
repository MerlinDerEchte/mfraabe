import styled from '@emotion/styled';
import react,{useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import { createMenuItemStyle } from './MenuItemStyles/MenuItemStyles';
import { EPaths } from '../../../constants/paths';
import { Link } from 'react-router-dom';
import { getPathName } from '../../../constants/getPathNames';
export interface IMenuItem {
    path:EPaths,
    index:number
}
export const MenuItem:react.FC<IMenuItem> = ({path,index}) => {

    const { isInit, isStart, initApp, screenWidth, screenHeight} = useContext(GlobalContext);
    const location = useLocation();
    const isSelected = path === location.pathname;
    const isStartPath = location.pathname === EPaths.NONE;
    const itemStyles = createMenuItemStyle(index,isInit,isStart,isSelected,isStartPath, screenWidth, screenHeight);
    const StyledMenuItem = styled.div(itemStyles);

    
    return(
       <StyledMenuItem >
           <Link onClick={initApp} to={path}>{getPathName(path)}</Link>    
        </StyledMenuItem> 
    )
}