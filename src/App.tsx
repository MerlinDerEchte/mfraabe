import  {useState, useEffect} from 'react';
import { getIsMobile } from './Utils/isMobile';
import { AppDesktop } from './Components/AppDesktop';
import { AppMobile } from './Components/AppMobile';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {

  const [ screenWidth, setScreenWidth ] = useState(0)
  const [ screenHeight, setScreenHeigth ] = useState(0)

  
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
        <AppMobile 
            screenHeight={screenHeight}
            screenWidth={screenWidth}
        />
        :
        <AppDesktop 
            screenHeight={screenHeight}
            screenWidth={screenWidth}
        />
      }
    </BrowserRouter>
  );
}
export default App;
