import react, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { createBottomBarStyles } from './BottomBarStyles';


export const BottomBar:react.FC<{}> =  () =>{
    const { isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = useContext(GlobalContext);
    const bottomBarStyles = createBottomBarStyles({
        isRun, 
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation 
    })
    return(
        <div className={bottomBarStyles}>
            
        </div>
    )
}