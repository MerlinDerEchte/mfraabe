import react, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../../GlobalContext';
import { getIsInitialPath } from '../../../../utils/getIsInitialPath';
import { createSloganUnderlineStyles } from './SloganUnderlineStyles';



export const SloganUnderline:react.FC<{}> = () => {
    const { isInit } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = getIsInitialPath(location.pathname);

    const underlineStyles = createSloganUnderlineStyles({isInit, isInitialPath})
    return(
        <div className={underlineStyles}></div>
    )
}