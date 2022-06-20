import { css, keyframes } from "@emotion/css"
import { colors } from "../../constants/css/colors";
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CONSTANTS } from "../GlobalConstantsMobile";

interface IcreateMobileMenuItemBackgroundStyles {
    isInit:boolean,
    isStart:boolean,
    isRun:boolean,
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation: boolean,
    isHideMobileMenuAnimation: boolean,
    screenHeight:number,
}

export const createMobileMenuBackgroundStyles = (params:IcreateMobileMenuItemBackgroundStyles ) => {
    const { isInit, isStart, isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation, screenHeight } = params;
    return(
        css({
            position: 'absolute',
            height: screenHeight,
            zIndex: 10,
            opacity: isInit ? 0 : 1,
            left: -3,
            width: isShowMobileMenu ? MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3 :  0 ,
            borderRight: `3px solid ${colors.LIGHTORANGE}`,
            background: colors.DARKBLUE,
            animation: createMobileMenuBackgroundAnimtaion({
                isStart,
                isRun,
                isShowMobileMenu,
                isShowMobileMenuAnimation,
                isHideMobileMenuAnimation,
            })
        })
    )
}
interface IcreateMobileMenuBackgroundAnimtaion {
    isStart:boolean,
    isRun:boolean,
    isShowMobileMenu:boolean
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean,
}
const createMobileMenuBackgroundAnimtaion = (params:IcreateMobileMenuBackgroundAnimtaion) => {
    const { isStart, isRun, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
  
    if(isStart){
        return(`${startMenuBackgroundAnimation} ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms linear`)
    }
    if(isRun && isShowMobileMenuAnimation){
        return(`${showMenuBackgroundAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms linear`)
    }
    if(isRun && isHideMobileMenuAnimation){
        return(`${hideMenuBackgroundAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms linear`)
    }
   
    return(``);
}

const startMenuBackgroundAnimation = keyframes`
    from{
        opacity:0;
        width: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH + 50}px;
       
    }
    to{
        opacity:1;
        width: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3}px;
      
    }
`
const showMenuBackgroundAnimation = keyframes`
    from{
        width: 0px ;
        left: -3px;
     
    } 
    to{
        width: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3}px;
        left: 0px;
    }
`
const hideMenuBackgroundAnimation = keyframes`
from{
    width: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3}px;
    left: 0px;
} 
to{
    width: 0px;
    left: -3px;   
}
`