import react, { useContext, useState } from 'react';
import { Page } from '../Page';
import { DevelopmentContext } from './DevelopmentContext';
import { EDevelopmentType } from './EDevelopmentType';
import { getIsNoService, getIsSelected } from './DevelopmentUtils';
import { DEVELOPMENT_ANIMATION_TIMINGS } from './DevelopmentConstants';
import { DevelopmentWrapper } from './Components/DevelopmentWrapper';
import { GlobalContext } from '../../../GlobalContext';
import { DevelopmentMobile } from './DevelopmentMobile';
import { DevelopmentDesktop } from './DevelopmentDesktop';

export const Development:react.FC<{}> = () => {

   const { isMobile } = useContext(GlobalContext);

   if(isMobile){
        return(<DevelopmentMobile />)
   }
   return( <DevelopmentDesktop /> )
}