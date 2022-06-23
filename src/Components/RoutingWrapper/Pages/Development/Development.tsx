import react, { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';
import { DevelopmentMobile } from './Components/DevelopmentMobile/DevelopmentMobile';
import { DevelopmentDesktop } from './Components/DevelopmentDesktop/DevelopmentDesktop';

export const Development:react.FC<{}> = () => {

   const { isMobile } = useContext(GlobalContext);

   if(isMobile){
        return(<DevelopmentMobile />)
   }
   return( <DevelopmentDesktop /> )
}