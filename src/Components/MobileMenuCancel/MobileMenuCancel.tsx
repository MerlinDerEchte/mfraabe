import react, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { createMobileMenuCancelStyles } from './MobileMenuCancelStyles';

export const MobileMenuCancel:react.FC<{}> = () => {

    const { isRun, isShowMobileMenu, handleShowMobileMenu} = useContext(GlobalContext);
    const aboutCancelStyles = createMobileMenuCancelStyles({isRun, isShowMobileMenu});

    const handleDeselectOnClick = (e:React.MouseEvent) => {
        e.stopPropagation();
        handleShowMobileMenu();
    }
    return(
        <div className={aboutCancelStyles} onClick={handleDeselectOnClick}>
            <div className="xBackground"></div>
            <div className="xForeground"></div>
        </div>
    )   
}