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
            opacity: isInit ? 0 : 1,
            left: isShowMobileMenu ? MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3 : -3,
            width: 3,
            background: colors.LIGHTORANGE,
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
        left: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH + 50}px;
    }
    to{
        opacity:1;
        left: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH}px;
    }
`
const showMenuBackgroundAnimation = keyframes`
    from{
        left: -3px;
    } 
    to{
        left: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3}px;
    }
`
const hideMenuBackgroundAnimation = keyframes`
from{
    left: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH -3}px;
} 
to{
    left: -3px;
}
`