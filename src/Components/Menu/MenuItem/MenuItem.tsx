import styled from '@emotion/styled';
import react,{useContext, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import { createMenuItemStyle } from './MenuItemStyles';
import { mainPath } from '../../../constants/paths';
import { applicationStatus } from '../../../constants/ApplicationStatus';
import { Link } from 'react-router-dom';

export const MenuItem:react.FC<{title:mainPath, index:number}> = ({title,index}) => {

    const { setFirstPath,appStatus, activePath} = useContext(GlobalContext);
    const location = useLocation();
    const isSelected = "/" + title === location.pathname;
    const isInit:boolean =  appStatus === applicationStatus.INIT;
    const isStart:boolean = appStatus === applicationStatus.START;
    const itemStyles = createMenuItemStyle(index,isInit,isStart,isSelected);
    const StyledMenuItem = styled.div(itemStyles);

    
    return(
       <StyledMenuItem onClick={e => setFirstPath(title)}>
           <Link to={title}>{title}</Link>    
        </StyledMenuItem> 
    )
}