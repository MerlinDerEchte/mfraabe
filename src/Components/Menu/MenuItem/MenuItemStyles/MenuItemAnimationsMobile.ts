import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CONSTANTS } from "../../../GlobalConstantsMobile";
import { keyframes } from "@emotion/css";
import { MOBILE_MENU_CONSTANTS } from "../../MenuConstantsMobile";

export interface IcreateMobileMenuItemAnimation {
    isInit: boolean,
    isStart: boolean,
    isRun:boolean,

    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean,
    menuItemInitMarginLeft: number,
    menuItemInitMarginTop: number,
    menuItemRunMarginTop:number
}

export const createMobileMenuItemAnimation = (inputParams:IcreateMobileMenuItemAnimation):string => {
    const { isInit, isStart, isRun, isShowMobileMenuAnimation, isHideMobileMenuAnimation, menuItemInitMarginLeft, menuItemInitMarginTop, menuItemRunMarginTop } = inputParams;
    if(isInit){
        return `${menuItemInitAnimation} ${MOBILE_ANIMATION_TIMINGS.INIT_MENU_TIME}ms ${MOBILE_ANIMATION_TIMINGS.INIT_MENU_DELAY}ms backwards`;
    } 
    if(isStart){
        const startAnimationParams:IcreateMobileMenuItemStartAnimation = {
            topStartPosition:menuItemInitMarginTop,
            leftStartPosition:menuItemInitMarginLeft,
            leftEndPosition: MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_LEFT,
            topEndPosition: menuItemRunMarginTop
        }
        return `${createMobileMenuItemStartAnimation(startAnimationParams)} ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms ease-in-out backwards`
    }
    if(isRun && isShowMobileMenuAnimation){
        return `${menuItemShowAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms linear backwards`; 
    }
    if(isRun && isHideMobileMenuAnimation){
        return `${menuItemHideAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms linear backwards`
    }
    return ''
}
export interface IcreateMobileMenuItemStartAnimation {
    topStartPosition:number, 
    leftStartPosition:number,
    leftEndPosition:number,
    topEndPosition:number 
}

function createMobileMenuItemStartAnimation(inputParams:IcreateMobileMenuItemStartAnimation ): string{
    const { topStartPosition, leftStartPosition, leftEndPosition, topEndPosition} = inputParams;
    const animation = keyframes`
        0%{
            top: ${topStartPosition}px; 
            left: ${leftStartPosition}px;
        }
        50%{
            top: calc(${topStartPosition}px - ${topEndPosition}px + 50px): 
            left: ${leftStartPosition}px;
        }
        100%{
            top:${topEndPosition}px; 
            left: ${leftEndPosition}px;
        }

    `
    return animation;
}
const menuItemInitAnimation = keyframes`
    from{
        opacity:0;
        transform: translateY(-30);
    }
    to{
        opacity:1;
        transform: translateY(0);
    }
`

const menuItemShowAnimation = keyframes`
    from{
        left: -${MOBILE_MENU_CONSTANTS.RUN_WIDTH}px;
    }
    to{
        left: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_LEFT}px;
    }
`

const menuItemHideAnimation = keyframes`
from{
    left: ${MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_LEFT}px;
}
to{
    left: -${MOBILE_MENU_CONSTANTS.RUN_WIDTH}px;
}`
