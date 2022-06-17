import react, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import { getIsInitialPath } from '../../../Utils/getIsInitialPath';
import { LogoSvg } from './LogoSvg';
import { createLogoSvgWrapperStyles } from './LogoSvgWrapperStyles';
import { createMobileLogoSvgWrapperStyles } from './LogoSvgWrapperStylesMobile';


export const LogoSvgWrapper:react.FC<{}> = () => {
    
    const { isInit, isStart, isMobile } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = getIsInitialPath(location.pathname)
    if(isMobile){
        const mobileLogoSvgWrapperStyles = createMobileLogoSvgWrapperStyles({isInit, isStart, isInitialPath});
        return(
            <div className={mobileLogoSvgWrapperStyles}>
                <LogoSvg />
            </div>
        )
    }
    
    const logoSvgWrapperStyles = createLogoSvgWrapperStyles({isInit, isStart, isInitialPath})
    
    return(
        <div className={logoSvgWrapperStyles}>
            <LogoSvg />
        </div>
    )
}