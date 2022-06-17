import react, {useContext} from 'react';
import { GlobalContext } from '../GlobalContext';
import { createCompanyLogoStyles } from './CompanyLogoStyles';
import { SloganLetter } from './Slogan/SloganLetter/SloganLetter';
import { useLocation } from 'react-router';
import { EPaths } from '../../constants/paths';
import { createMobileCompanyLogoStyles } from './CompanyLogoStylesMobile';
import { LogoSvg } from './LogoSvg/LogoSvg';
import { Slogan } from './Slogan/Slogan';
import { LogoSvgWrapper } from './LogoSvg/LogoSvgWrapper';


export const CompanyLogo:react.FC<{}> = () => {
    const { isInit, isStart, isRun, screenHeight, screenWidth, isMobile, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = useContext(GlobalContext);
    const location = useLocation();
    
    
    const isInitialPath = location.pathname === EPaths.NONE;
    const companyLogoStyles = createCompanyLogoStyles({
        isInit,
        isStart,
        isInitialPath,
        screenHeight,
        screenWidth
     });
    const companyLogoStylesMobile = createMobileCompanyLogoStyles({
        isInit,
        isStart,
        isRun,
        isInitialPath,
        screenHeight,
        screenWidth,
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation
    });
    //const StyledCompanyLogoDiv = isMobile ? styled.div(comanyLogoStylesM) : styled.div(companyLogoStyles)
    
    return(
        <div className={isMobile ? companyLogoStylesMobile : companyLogoStyles}>
            <LogoSvgWrapper />
            <Slogan />
        </div>
    )
}
