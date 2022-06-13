import react, {useState, useEffect} from 'react';
import { EPaths } from './constants/paths';
import {GlobalContext} from './GlobalContext';
import {appStyles} from './AppStyles';
import {CompanyLogo} from './Components/CompanyLogo/CompanyLogo'
import {Menu} from './Components/Menu/Menu';
import {MainContainer} from './Components/MainContainer/MainContainer';
import { applicationStatus } from './constants/ApplicationStatus';
import { BrowserRouter,useLocation } from 'react-router-dom';
import { isMobile } from './utils/isMobile';
import { MobileInMaintenance } from './Components/MobileInMaintenance';
import { getIsStart } from './utils/isStart';
import { getIsInit } from './utils/isInit';
import { getIsRun } from './utils/isRun';

function AppComponent() {

 
  const [activePath, setActivePath] = useState(EPaths.NONE);

  const [appStatus, setAppStatus] = useState(applicationStatus.INIT);
  const [screenWidth, setScreenWidth] = useState(0)
  const [ screenHeight, setScreenHeigth] = useState(0)
  const location = useLocation();
  
  // rename
  const setFirstPath = (path:EPaths) => {
    if(appStatus === applicationStatus.INIT){

      setAppStatus(applicationStatus.START); 
      setTimeout(()=> {
        setAppStatus(applicationStatus.RUN);
      },1000);
    }
  }

  const isStart = getIsStart(appStatus);
  const isInit = getIsInit(appStatus);
  const isRun = getIsRun(appStatus);


  const globalContextValue = ({activePath, isInit, isStart, isRun, setFirstPath, screenWidth, screenHeight}); 


   const handleResize = ():void => {
    setScreenWidth(window.innerWidth);
    setScreenHeigth(window.innerHeight);
  }


  useEffect(()=>{
    if(location.pathname !== EPaths.NONE){
      setAppStatus(applicationStatus.RUN);
    }
    setScreenWidth(window.innerWidth);
    setScreenHeigth(window.innerHeight);
    window.addEventListener("resize",()=> handleResize())
  },[location.pathname]);


 
  return (

    <GlobalContext.Provider value={globalContextValue}>
      {isMobile(screenWidth) ?
        <MobileInMaintenance />
        :
        <div className={appStyles}>        
            <CompanyLogo />
            <Menu />
            <MainContainer />
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
