import styled from '@emotion/styled';
import react,{useContext, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import { createMenuItemStyle } from './MenuItemStyles';
import { EPaths } from '../../../constants/paths';
import { applicationStatus } from '../../../constants/ApplicationStatus';
import { Link } from 'react-router-dom';
import { getPathName } from '../../../constants/getPathNames';

export const MenuItem:react.FC<{path:EPaths, index:number}> = ({path,index}) => {

    const { setFirstPath,isInit, isStart} = useContext(GlobalContext);
    const location = useLocation();
    console.log(location.pathname)
    const isSelected = path === location.pathname;
    const isStartPath = location.pathname === EPaths.NONE;
    const itemStyles = createMenuItemStyle(index,isInit,isStart,isSelected,isStartPath);
    const StyledMenuItem = styled.div(itemStyles);

    
    return(
       <StyledMenuItem onClick={e => setFirstPath(path)}>
           <Link to={path}>{getPathName(path)}</Link>    
        </StyledMenuItem> 
    )
}