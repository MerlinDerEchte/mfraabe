import styled from '@emotion/styled';
import react,{useContext, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import { createMenuItemStyle } from './MenuItemStyles';
import { mainPath } from '../../../constants/paths';
import { applicationStatus } from '../../../constants/ApplicationStatus';
import { Link } from 'react-router-dom';

export const MenuItem:react.FC<{title:mainPath, index:number}> = ({title,index}) => {

    const { setFirstPath,isInit, isStart} = useContext(GlobalContext);
    const location = useLocation();
    const isSelected = "/" + title === location.pathname;
    const isStartPath = location.pathname === "/";
    const itemStyles = createMenuItemStyle(index,isInit,isStart,isSelected,isStartPath);
    const StyledMenuItem = styled.div(itemStyles);

    
    return(
       <StyledMenuItem onClick={e => setFirstPath(title)}>
           <Link to={title}>{title}</Link>    
        </StyledMenuItem> 
    )
}