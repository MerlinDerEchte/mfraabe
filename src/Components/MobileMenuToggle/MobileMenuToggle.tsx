import react, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { BottomBar } from './BottomBar/BottomBar';
import { MidBar } from './MidBar/MidBar';
import { createMobileMenuToggleStyles } from './MobileMenuToggleStyles';
import { TopBar } from './TopBar/TopBar';

export const MobileMenuToggle:react.FC<{}> = () => {

    const { isRun, screenWidth, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation, handleToggleMobileMenu} = useContext(GlobalContext);
    const aboutCancelStyles = createMobileMenuToggleStyles({
        isRun,
        screenWidth,
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation
    });

  
    return(
        <div className={aboutCancelStyles} onClick={handleToggleMobileMenu}>
            <TopBar />
            <MidBar />
            <BottomBar />
        </div>
    )   
}