import { css } from '@emotion/css';
import { isNullOrUndefined } from 'util';
import { colors } from '../../../../constants/css/colors';
import { fontSizes } from '../../../../constants/css/fontSizes';
import { MOBILE_PAGE_COMPANY_LOGO_CONSTANTS, MOBILE_PAGE_MENU_CONSTANTS } from '../../../GlobalConstantsMobile';
import { MOBILE_MENU_CONSTANTS } from '../../MenuConstantsMobile';
import { createMobileMenuItemAnimation, IcreateMobileMenuItemAnimation } from './MenuItemAnimationsMobile';


export interface IcreateMobileMenuItemStyles  {
    index:number,
    isInit:boolean,
    isRun:boolean,
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean,
    isStart:boolean,
    isSelected:boolean,
    isStartPath:boolean,
    screenWidth:number,
    screenHeight:number
}

export const createMobileMenuItemStyles = ( params:IcreateMobileMenuItemStyles ) => {
    const { 
        index,
        isInit,
        isStart,
        isRun,
        isShowMobileMenu,
        isShowMobileMenuAnimation,
        isHideMobileMenuAnimation,
        isSelected,
        isStartPath,
        screenWidth,
        screenHeight 
    } = params;
    
    const mobileMenuItemInitMarginTop = (screenHeight / 2 )  + MOBILE_PAGE_MENU_CONSTANTS.INIT_EXTRA_MARGIN_TOP +  index * (MOBILE_MENU_CONSTANTS.INIT_HEIGHT + MOBILE_MENU_CONSTANTS.INIT_GAP_Y)
    const mobileMenuItemInitMarginLeft = (screenWidth - MOBILE_MENU_CONSTANTS.INIT_WIDTH ) /2 ; 

    const mobileMenuItemRunMarginTop = MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_TOP + index * (MOBILE_MENU_CONSTANTS.RUN_HEIGHT + MOBILE_MENU_CONSTANTS.RUN_GAP_Y);
    const mobileMenuItemAnimationParams:IcreateMobileMenuItemAnimation = {
        isInit: isInit,
        isStart: isStart,
        isRun: isRun,
        isShowMobileMenuAnimation: isShowMobileMenuAnimation,
        isHideMobileMenuAnimation: isHideMobileMenuAnimation,
        menuItemInitMarginLeft: mobileMenuItemInitMarginLeft ,
        menuItemInitMarginTop: mobileMenuItemInitMarginTop,
        menuItemRunMarginTop: mobileMenuItemRunMarginTop
    } 
    
    const menuItemAnimation = createMobileMenuItemAnimation(mobileMenuItemAnimationParams);
    return(
        css({
            display: 'flex',
            lineHeight: '30px',
            justifyContent:'center',
            alignItems:'start',
            position: 'absolute',
            zIndex: 10,
            top: isInit && isStartPath ? mobileMenuItemInitMarginTop : mobileMenuItemRunMarginTop,
            left: isInit && isStartPath ? 
                mobileMenuItemInitMarginLeft
                :
                isShowMobileMenu ?
                    MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_LEFT
                    :
                    -MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH
                    ,

            fontSize: fontSizes.BIG,
            fontWeight: 50,
            width: isInit ? MOBILE_MENU_CONSTANTS.INIT_WIDTH : MOBILE_MENU_CONSTANTS.RUN_WIDTH,
            color: colors.DARKWHITE,
            height: isInit ? MOBILE_MENU_CONSTANTS.INIT_HEIGHT : MOBILE_MENU_CONSTANTS.RUN_HEIGHT,
            animation: menuItemAnimation,
            
            'a':{
                boxShadow: isSelected ?  `0px 5px 0px -3px  ${colors.LIGHTORANGE}`: '',
            },

            '&:hover':{
                
                'a':{
                    boxShadow: !isSelected ?  `0px 5px 0px -3px  ${colors.LIGHTORANGE}`: '',
                    cursor: 'pointer', 
                }                
            },
            

        })
    );
};
