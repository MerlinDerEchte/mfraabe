import styled from '@emotion/styled';
import react,{useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import { createMenuItemStyle } from './MenuItemStyles';
import { EPaths } from '../../../constants/paths';
import { Link } from 'react-router-dom';
import { getPathName } from '../../../constants/getPathNames';

export const MenuItem:react.FC<{path:EPaths, index:number}> = ({path,index}) => {

    const { isInit, isStart, initApp} = useContext(GlobalContext);
    const location = useLocation();
    const isSelected = path === location.pathname;
    const isStartPath = location.pathname === EPaths.NONE;
    const itemStyles = createMenuItemStyle(index,isInit,isStart,isSelected,isStartPath);
    const StyledMenuItem = styled.div(itemStyles);

    
    return(
       <StyledMenuItem >
           <Link onClick={initApp} to={path}>{getPathName(path)}</Link>    
        </StyledMenuItem> 
    )
}