import react, {useState, MouseEvent, useEffect} from 'react';
import { mainPath } from './constants/paths';
import {GlobalContext} from './GlobalContext';
import {appStyles} from './AppStyles';
import {CompanyLogo} from './Components/CompanyLogo/CompanyLogo'
import {Menu} from './Components/Menu/Menu';
import {MainContainer} from './Components/MainContainer/MainContainer';
import { applicationStatus } from './constants/ApplicationStatus';
import { BrowserRouter } from 'react-router-dom';
import { IPosition } from './Types/IPosition';
import { MousePositionContext } from './Components/MainContainer/Pages/About/AboutMain/MousePositionContext';

const startAnimationDuration = 1000;
function App() {

 
  const [activePath, setActivePath] = useState(mainPath.NONE);

  const [appStatus, setAppStatus] = useState(applicationStatus.INIT);
 
  const setFirstPath = (path:mainPath) => {
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


  const globalContextValue = ({activePath,appStatus, isInit, isStart, isRun, setFirstPath}); 
 
  return (

    <GlobalContext.Provider value={globalContextValue}>
      <BrowserRouter>
        <div className={appStyles}>        
            <CompanyLogo />
            <Menu />
            <MainContainer />
        </div>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
