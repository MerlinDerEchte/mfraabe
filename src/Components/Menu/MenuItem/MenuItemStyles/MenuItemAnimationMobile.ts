import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CONSTANTS } from "../../../../GlobalConstantsMobile";
import { keyframes } from "@emotion/css";

export interface IcreateMobileMenuItemAnimation {
    isInit: boolean,
    isStart: boolean,
    menuItemInitMarginLeft: number,
    menuItemInitMarginTop: number,
    menuItemRunMarginTop:number
}

export const createMobileMenuItemAnimation = (inputParams:IcreateMobileMenuItemAnimation):string => {
    const { isInit, isStart, menuItemInitMarginLeft, menuItemInitMarginTop, menuItemRunMarginTop } = inputParams;
    if(isInit){
        return `${MenuItemInitAnimation} ${MOBILE_ANIMATION_TIMINGS.INIT_MENU_TIME}ms ${MOBILE_ANIMATION_TIMINGS.INIT_MENU_DELAY}ms backwards`;
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
const MenuItemInitAnimation = keyframes`
    from{
        opacity:0;
        transform: translateY(-30);
    }
    to{
        opacity:1;
        transform: translateY(0);
    }
`
