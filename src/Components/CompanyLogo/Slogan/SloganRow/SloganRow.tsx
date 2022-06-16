import react, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../../GlobalContext';
import { getIsInitialPath } from '../../../../utils/getIsInitialPath';
import { createSloganRowStyles } from './SloganRowStyles';


export const SloganRow:react.FC<{children:any}> = ({children}) => {
    const {isInit, isStart } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = getIsInitialPath(location.pathname);
    const sloganRowStyles = createSloganRowStyles({isInit, isStart, isInitialPath})
    return(
        <div className={sloganRowStyles}>
            {children}
        </div>
    )
}