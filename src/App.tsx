import  {useState, useEffect} from 'react';
import { EPaths } from './constants/paths';
import {GlobalContext} from './GlobalContext';
import {appStyles} from './AppStyles';
import {CompanyLogo} from './Components/CompanyLogo/CompanyLogo'
import {Menu} from './Components/Menu/Menu';
import { RoutingWrapper } from './Components/RoutingWrapper/RoutingWrapper';
import { applicationStatus } from './constants/ApplicationStatus';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { getIsMobile } from './utils/isMobile';
import { MobileInMaintenance } from './Components/MobileInMaintenance';
import { getIsStart } from './utils/isStart';
import { getIsInit } from './utils/isInit';
import { getIsRun } from './utils/isRun';
import { getIsInitialPath } from './utils/getIsInitialPath';
import { ANIMATION_TIMINGS } from './GlobalConstants';
import { appStylesMobile } from './AppStylesMobile';

function AppComponent() {

 
  const [appStatus, setAppStatus] = useState(applicationStatus.INIT);
  const [screenWidth, setScreenWidth] = useState(0)
  const [ screenHeight, setScreenHeigth] = useState(0)
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

  
  const handleResize = ():void => {
      setScreenWidth(window.innerWidth);
      setScreenHeigth(window.innerHeight);
  }


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
    window.addEventListener("resize",()=> handleResize())
  },[location.pathname, isRun, isStart, navigate]);


 
  return (

    <GlobalContext.Provider value={globalContextValue}>
      {isMobile ?
        <MobileInMaintenance />
        :
        <div className={isMobile ? appStylesMobile : appStyles}>        
            <CompanyLogo />
            <Menu />
            <RoutingWrapper />
        </div>
    }
    </GlobalContext.Provider>
  );
}
function App() {
  return(
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  )
}

export default App;
