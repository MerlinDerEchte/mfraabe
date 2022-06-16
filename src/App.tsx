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
import { AppDesktop } from './AppDesktop';
import { AppMobile } from './AppMobile';

export const App = () => {

  const [screenWidth, setScreenWidth] = useState(0)
  const [ screenHeight, setScreenHeigth] = useState(0)

  
  const handleResize = ():void => {
      setScreenWidth(window.innerWidth);
      setScreenHeigth(window.innerHeight);
  }
  useEffect(()=>{
    setScreenWidth(window.innerWidth);
    setScreenHeigth(window.innerHeight);
    window.addEventListener("resize",()=> handleResize())
  },[]);

  const isMobile = getIsMobile(screenWidth);
 
  return (
<BrowserRouter>
      {isMobile ?
        <AppMobile />
        :
        <AppDesktop mainScreenWidth={screenWidth} mainScreenHeight={screenHeight}/>
    }
  </BrowserRouter>
  );
}
export default App;
