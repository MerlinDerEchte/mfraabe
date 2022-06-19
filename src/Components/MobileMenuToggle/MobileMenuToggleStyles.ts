import {css } from '@emotion/css';
import { MOBILE_PAGE_MENU_CANCEL_CONSTANTS } from '../GlobalConstantsMobile';
import { createMobileMenuToggleAnimation } from './MobileMenuToggleAnimation';
import { MOBILE_MENU_TOGGLE_CONSTANTS } from './MobileMenuToggleConstants';


interface IcreateMobileMenuToggleStyles {
   
    isRun:boolean, 
    screenWidth:number,
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean

}

export const createMobileMenuToggleStyles = (params:IcreateMobileMenuToggleStyles) => {
    const { isRun, screenWidth, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;

        return css({
            animation: createMobileMenuToggleAnimation({
                isRun, 
                screenWidth,
                isShowMobileMenuAnimation,
                isHideMobileMenuAnimation
            }),
            position:'absolute',
            opacity: isRun && (isShowMobileMenu || isHideMobileMenuAnimation || !isShowMobileMenu) ? 1 : 0,
            left: isShowMobileMenu ?
                screenWidth - MOBILE_MENU_TOGGLE_CONSTANTS.SHOW_MENU_RIGHT  - MOBILE_PAGE_MENU_CANCEL_CONSTANTS.WIDTH
                :
                MOBILE_MENU_TOGGLE_CONSTANTS.HIDE_MENU_LEFT,
            top: MOBILE_MENU_TOGGLE_CONSTANTS.TOP,
            zIndex: 15,
            width: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.WIDTH,
            height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.HEIGHT,
        })  
    
}