import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { appStylesMobile } from "./AppStylesMobile"
import { CompanyLogo } from "../Components/CompanyLogo/CompanyLogo"
import { Menu } from "../Components/Menu/Menu"
import { applicationStatus } from "../constants/ApplicationStatus"
import { EPaths } from "../constants/paths"
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CONSTANTS } from "./GlobalConstantsMobile"
import { GlobalContext } from "./GlobalContext"
import { getIsInitialPath } from "../Utils/getIsInitialPath"
import { getIsInit } from "../Utils/isInit"
import { getIsMobile } from "../Utils/isMobile"
import { getIsRun } from "../Utils/isRun"
import { getIsStart } from "../Utils/isStart"
import { MobileMenuBackground } from "./MobileMenuBackground/MobileMenuBackground"
import { MobileMenuCancel } from "./MobileMenuCancel/MobileMenuCancel"

export interface IAppMobileProps {
    screenHeight:number,
    screenWidth:number
}

export const AppMobile = (params:IAppMobileProps) => {
    const { screenHeight, screenWidth  } = params;
    const [ appStatus, setAppStatus] = useState(applicationStatus.INIT);
    const [ isShowMobileMenu, setIsShowMobileMenu ] = useState(true);
    const [ isShowMobileMenuAnimation, setIsShowMobileMenuAnimation ] = useState(false);
    const [ isHideMobileMenuAnimation, setIsHideMobileMenuAnimation ] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = getIsMobile(screenWidth);
 
    const initApp = () => {
        if(appStatus === applicationStatus.INIT){
        
        setAppStatus(applicationStatus.START); 
        setTimeout(()=> {
            setAppStatus(applicationStatus.RUN);
            handleHideMobileMenu();
        },MOBILE_ANIMATION_TIMINGS.START_TIME + 0.05);
        }
    }
    const handleShowMobileMenu = () => {
     
        setIsShowMobileMenuAnimation(true);
        const timeout:any = setTimeout(() => {
            setIsShowMobileMenu(true);
            setIsShowMobileMenuAnimation(false);
            clearTimeout(timeout);
        
        }, MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME );
    
    }
    const handleHideMobileMenu = () => {
        setIsHideMobileMenuAnimation(true)
        const timeout:any = setTimeout(()=> {
            setIsShowMobileMenu(false);
            setIsHideMobileMenuAnimation(false)
            clearTimeout(timeout)
        }, MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME )
       
    }

  const isStart = getIsStart(appStatus);
  const isInit = getIsInit(appStatus);
  const isRun = getIsRun(appStatus);
 
  const globalContextValue = ({ 
    isInit,
    isStart, 
    isRun, 
    isMobile,
    screenWidth, 
    screenHeight, 
    initApp, 
    isShowMobileMenu, 
    isShowMobileMenuAnimation,
    isHideMobileMenuAnimation,
    handleShowMobileMenu, 
    handleHideMobileMenu}); 

  useEffect(()=>{
   
    if(!getIsInitialPath(location.pathname) && !(isRun || isStart)){
      setAppStatus(applicationStatus.RUN);
      setIsShowMobileMenu(false)
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
                <MobileMenuBackground />
                <MobileMenuCancel />
                <CompanyLogo />
            </div>
        </GlobalContext.Provider>
    )
}