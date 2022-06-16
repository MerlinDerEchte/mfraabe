import react, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../../GlobalContext';
import { getIsInitialPath } from '../../../../utils/getIsInitialPath';
import { createSloganRowStyles } from './SloganRowStyles';
import { createMobileSloganRowStyles } from './SloganRowStylesMobile';


export const SloganRow:react.FC<{children:any}> = ({children}) => {
    const {isInit, isStart, isMobile } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = getIsInitialPath(location.pathname);
    if(isMobile){
        const mobileSloganRowStyles = createMobileSloganRowStyles({isInit, isStart, isInitialPath})
        return(
            <div className={mobileSloganRowStyles}>
                {children}
            </div>
        )
    }
    const sloganRowStyles = createSloganRowStyles({isInit, isStart, isInitialPath})
    return(
        <div className={sloganRowStyles}>
            {children}
        </div>
    )
}