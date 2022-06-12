import react, {useState, useEffect} from 'react';
import { EPaths } from './constants/paths';
import {GlobalContext} from './GlobalContext';
import {appStyles} from './AppStyles';
import {CompanyLogo} from './Components/CompanyLogo/CompanyLogo'
import {Menu} from './Components/Menu/Menu';
import {MainContainer} from './Components/MainContainer/MainContainer';
import { applicationStatus } from './constants/ApplicationStatus';
import { BrowserRouter,useLocation } from 'react-router-dom';

function AppComponent() {

 
  const [activePath, setActivePath] = useState(EPaths.NONE);

  const [appStatus, setAppStatus] = useState(applicationStatus.INIT);
  const location = useLocation();
  console.log(location.pathname);
  
  const setFirstPath = (path:EPaths) => {
    if(appStatus === applicationStatus.INIT){

      setAppStatus(applicationStatus.START); 
      setTimeout(()=> {
        setAppStatus(applicationStatus.RUN);
      },1000);
    }
  }
 
  const isStart = appStatus === applicationStatus.START;
  const isInit = appStatus === applicationStatus.INIT;
  const isRun = appStatus === applicationStatus.RUN;


  const globalContextValue = ({activePath, appStatus, isInit, isStart, isRun, setFirstPath}); 
  useEffect(()=>{
    if(location.pathname!== "/"){
      setAppStatus(applicationStatus.RUN);
    }
  },[]);
  return (

    <GlobalContext.Provider value={globalContextValue}>
        <div className={appStyles}>        
            <CompanyLogo />
            <Menu />
            <MainContainer />
        </div>
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
