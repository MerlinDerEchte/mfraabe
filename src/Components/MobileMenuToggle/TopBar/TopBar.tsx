import react, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { createTopBarStyles } from './TopBarStyles';


export const TopBar:react.FC<{}> =  () =>{
    const { isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = useContext(GlobalContext);
    const topBarStyles = createTopBarStyles({
        isRun, 
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation 
    })
    return(
        <div className={topBarStyles}>
            
        </div>
    )
}