import react, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { createMobileMenuBackgroundStyles } from './MobileMenuBackgroundStyles';


export const MobileMenuBackground:react.FC<{}> = () => {
    const { isInit, isStart, isRun, isShowMobileMenu, isHideMobileMenuAnimation, isShowMobileMenuAnimation, screenHeight } = useContext(GlobalContext);
    const mobileMenuBackgroundStyles = createMobileMenuBackgroundStyles	({
        isInit,
        isStart,
        isRun,
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation,
        screenHeight});
    return(
        <div className={mobileMenuBackgroundStyles}>

        </div>
    )
}