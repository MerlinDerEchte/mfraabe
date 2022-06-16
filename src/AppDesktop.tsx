import  react, {useState, useEffect} from 'react';
import { EPaths } from './constants/paths';
import {appStyles} from './AppStyles';
import {CompanyLogo} from './Components/CompanyLogo/CompanyLogo'
import {Menu} from './Components/Menu/Menu';
import { RoutingWrapper } from './Components/RoutingWrapper/RoutingWrapper';
import { applicationStatus } from './constants/ApplicationStatus';
import {  useLocation, useNavigate } from 'react-router-dom'
import { getIsMobile } from './utils/isMobile';
import { getIsStart } from './utils/isStart';
import { getIsInit } from './utils/isInit';
import { getIsRun } from './utils/isRun';
import { getIsInitialPath } from './utils/getIsInitialPath';
import { ANIMATION_TIMINGS } from './GlobalConstants';
import { GlobalContext } from './GlobalContext';

export interface IAppDesktopProps {
    mainScreenWidth:number,
    mainScreenHeight:number,
}
export const AppDesktop = (params:IAppDesktopProps) => {
    const { mainScreenWidth, mainScreenHeight } = params;
    const [appStatus, setAppStatus] = useState(applicationStatus.INIT);
    const [ screenWidth, setScreenWidth] = useState(mainScreenWidth);
    const [ screenHeight, setScreenHeigth] = useState(mainScreenHeight);
    const location = useLocation();
    const navigate = useNavigate();
  // rename

    const initApp = () => {
        if(appStatus === applicationStatus.INIT){
        
        setAppStatus(applicationStatus.START); 
        setTimeout(()=> {
            setAppStatus(applicationStatus.RUN);
        },ANIMATION_TIMINGS.START_TIME + 0.05);
        }
    }

  const isStart = getIsStart(appStatus);
  const isInit = getIsInit(appStatus);
  const isRun = getIsRun(appStatus);

  const isMobile = getIsMobile(screenWidth);
  const globalContextValue = ({ isInit, isStart, isRun, screenWidth, screenHeight, initApp, isMobile}); 

  useEffect(()=>{
   
    if(!getIsInitialPath(location.pathname) && !(isRun || isStart)){
      setAppStatus(applicationStatus.RUN);
    }
    if(getIsInitialPath(location.pathname) && !isStart){
      navigate(EPaths.NONE)
      setAppStatus(applicationStatus.INIT)
    }
    setScreenWidth(window.innerWidth);
    setScreenHeigth(window.innerHeight);
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