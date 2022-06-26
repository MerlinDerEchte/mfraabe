import { useState, useEffect } from 'react';
import { EPaths } from '../constants/paths';
import { appStyles } from './AppStyles';
import { CompanyLogo } from './CompanyLogo/CompanyLogo'
import { Menu} from './Menu/Menu';
import { RoutingWrapper } from './PageWrapper/RoutingWrapper';
import { applicationStatus } from '../constants/ApplicationStatus';
import { useLocation, useNavigate } from 'react-router-dom'
import { getIsMobile } from '../Utils/isMobile';
import { getIsStart } from '../Utils/isStart';
import { getIsInit } from '../Utils/isInit';
import { getIsRun } from '../Utils/isRun';
import { getIsInitialPath } from '../Utils/getIsInitialPath';
import { ANIMATION_TIMINGS } from './GlobalConstants';
import { GlobalContext } from './GlobalContext';

export interface IAppDesktopProps {
    screenHeight:number,
    screenWidth:number
}
export const AppDesktop = (params:IAppDesktopProps) => {
    const { screenHeight, screenWidth  } = params;
    const [ appStatus, setAppStatus ] = useState(applicationStatus.INIT);
    const location = useLocation();
    const navigate = useNavigate();
  // rename

    const initApp = () => {
                
        setAppStatus(applicationStatus.START); 
        setTimeout(()=> {
            setAppStatus(applicationStatus.RUN);
        },ANIMATION_TIMINGS.START_TIME + 0.05);
    }
    const handleMenuItemClick  = () => {
      if(appStatus === applicationStatus.INIT){
        initApp();
      }
    }

  const isStart = getIsStart(appStatus);
  const isInit = getIsInit(appStatus);
  const isRun = getIsRun(appStatus);

  const isMobile = getIsMobile(screenWidth);

  // shared context --> reafactor 
  const isShowMobileMenu = false;
  const isShowMobileMenuAnimation= false;
  const isHideMobileMenuAnimation= false;
  const handleToggleMobileMenu = () => {};
    
  const globalContextValue = ({ 
    isInit,
    isStart,
    isRun,
    screenWidth,
    screenHeight,
    handleMenuItemClick,
    isMobile,
    isShowMobileMenu,
    isShowMobileMenuAnimation,
    isHideMobileMenuAnimation,
    handleToggleMobileMenu
    
    }); 

  useEffect(()=>{
   
    if(!getIsInitialPath(location.pathname) && !(isRun || isStart)){
      setAppStatus(applicationStatus.RUN);
    }
    if(getIsInitialPath(location.pathname) && !isStart){
      navigate(EPaths.NONE)
      setAppStatus(applicationStatus.INIT)
    }
    },[location.pathname, isRun, isStart, navigate]);
    
  return (
    <GlobalContext.Provider value={globalContextValue}>
        <div className={appStyles}>        
            <CompanyLogo />
            <Menu />
            <RoutingWrapper />
        </div>
    </GlobalContext.Provider>
  );
}