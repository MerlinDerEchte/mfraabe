import react, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { createMidBarStyles } from './MidBarStyles';


export const MidBar:react.FC<{}> =  () =>{
    const { isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = useContext(GlobalContext);
    const midBarStyles = createMidBarStyles({
        isRun, 
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation 
    })
    return(
        <div className={midBarStyles}>
            
        </div>
    )
}