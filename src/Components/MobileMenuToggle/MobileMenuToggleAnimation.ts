import { keyframes } from "@emotion/css";
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CANCEL_CONSTANTS } from "../GlobalConstantsMobile";
import { MOBILE_MENU_TOGGLE_CONSTANTS } from "./MobileMenuToggleConstants";


export interface IcreateMobileMenuToggleAnimation {
    isRun:boolean,
    screenWidth:number,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean
}



export const createMobileMenuToggleAnimation = (params:IcreateMobileMenuToggleAnimation) => {
    const { isRun, screenWidth, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
 
    if(isShowMobileMenuAnimation && isRun){
        return `${creteShowMobileMenuToggleAnimation(screenWidth)} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms ease-in-out backwards`;
    }
    if(isHideMobileMenuAnimation && isRun){
        return `${createHideMobileMenuToggleAnimation(screenWidth)} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms  ease-in-out 0s backwards`
    }
    return ''
  
}
const createHideMobileMenuToggleAnimation = (screenWidth:number) =>  keyframes`
    from{
        left: ${screenWidth - MOBILE_MENU_TOGGLE_CONSTANTS.SHOW_MENU_RIGHT - MOBILE_PAGE_MENU_CANCEL_CONSTANTS.WIDTH}px;
      
    }   
    to{
   
        left: ${MOBILE_MENU_TOGGLE_CONSTANTS.HIDE_MENU_LEFT}px ;
    }
`;

const creteShowMobileMenuToggleAnimation = (screenWidth:number) =>  keyframes`
    from{
       
    
        left: ${MOBILE_MENU_TOGGLE_CONSTANTS.HIDE_MENU_LEFT}px ;
    }   
    to{
       
        left: ${screenWidth - MOBILE_MENU_TOGGLE_CONSTANTS.SHOW_MENU_RIGHT - MOBILE_PAGE_MENU_CANCEL_CONSTANTS.WIDTH}px;
   
    }
`;
