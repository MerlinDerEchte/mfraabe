import react,{useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import { createMenuItemStyles } from './MenuItemStyles/MenuItemStyles';
import { EPaths } from '../../../constants/paths';
import { Link } from 'react-router-dom';
import { getPathName } from '../../../constants/getPathNames';
import { createMobileMenuItemStyles } from './MenuItemStyles/MenuItemStylesMobile';
export interface IMenuItem {
    path:EPaths,
    index:number
}
export const MenuItem:react.FC<IMenuItem> = ({path,index}) => {

    const { isInit, isStart, isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation, isMobile, initApp, screenWidth, screenHeight} = useContext(GlobalContext);
    const location = useLocation();
    const isSelected = path === location.pathname;
    const isStartPath = location.pathname === EPaths.NONE;
    const itemStyles = createMenuItemStyles({index,isInit,isStart,isSelected, isStartPath, screenWidth, screenHeight});
    const itemStylesMobile = createMobileMenuItemStyles({
        index, 
        isInit, 
        isStart, 
        isRun, 
        isShowMobileMenu, 
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation,
        isSelected, 
        isStartPath, 
        screenWidth, 
        screenHeight
    })
   
    
    return(
       <div className={isMobile ? itemStylesMobile : itemStyles} >
           <Link onClick={initApp} to={path}>{getPathName(path)}</Link>    
        </div> 
    )
}