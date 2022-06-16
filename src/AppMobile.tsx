import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { appStylesMobile } from "./AppStylesMobile"
import { CompanyLogo } from "./Components/CompanyLogo/CompanyLogo"
import { Menu } from "./Components/Menu/Menu"
import { applicationStatus } from "./constants/ApplicationStatus"
import { EPaths } from "./constants/paths"
import { MOBILE_ANIMATION_TIMINGS } from "./GlobalConstantsMobile"
import { GlobalContext } from "./GlobalContext"
import { getIsInitialPath } from "./Utils/getIsInitialPath"
import { getIsInit } from "./Utils/isInit"
import { getIsMobile } from "./Utils/isMobile"
import { getIsRun } from "./Utils/isRun"
import { getIsStart } from "./Utils/isStart"

export interface IAppMobileProps {
    screenHeight:number,
    screenWidth:number
}

export const AppMobile = (params:IAppMobileProps) => {
    const { screenHeight, screenWidth  } = params;
    const [ appStatus, setAppStatus] = useState(applicationStatus.INIT);
    const [ showMenu, setShowMenu ] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const initApp = () => {
        if(appStatus === applicationStatus.INIT){
        
        setAppStatus(applicationStatus.START); 
        setTimeout(()=> {
            setAppStatus(applicationStatus.RUN);
        },MOBILE_ANIMATION_TIMINGS.START_TIME + 0.05);
        }
    }

  const isStart = getIsStart(appStatus);
  const isInit = getIsInit(appStatus);
  const isRun = getIsRun(appStatus);

  const isMobile = getIsMobile(screenWidth);
  
  const globalContextValue = ({ isInit, isStart, isRun, screenWidth, screenHeight, initApp, isMobile, showMenu}); 

  useEffect(()=>{
   
    if(!getIsInitialPath(location.pathname) && !(isRun || isStart)){
      setAppStatus(applicationStatus.RUN);
    }
    if(getIsInitialPath(location.pathname) && !isStart){
      navigate(EPaths.NONE)
      setAppStatus(applicationStatus.INIT)
    }
    },[location.pathname, isRun, isStart, navigate]);
    
    return(
        <GlobalContext.Provider value={globalContextValue}>
            <div className={appStylesMobile}>
                <Menu />
                <CompanyLogo />
            </div>
        </GlobalContext.Provider>
    )
}