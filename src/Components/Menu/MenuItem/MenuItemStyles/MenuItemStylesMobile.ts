import { css } from '@emotion/css';
import { colors } from '../../../../constants/css/colors';
import { fontSizes } from '../../../../constants/css/fontSizes';
import { MOBILE_PAGE_COMPANY_LOGO_CONSTANTS, MOBILE_PAGE_MENU_CONSTANTS } from '../../../../GlobalConstantsMobile';
import { MOBILE_MENU_CONSTANTS } from '../../MenuConstantsMobile';
import { createMenuItemAnimation, IcreateMenuItemAnimation } from './MenuItemAnimations';


export interface IcreateMobileMenuItemStyles {
    index:number,
    isInit:boolean,
    isStart:boolean,
    isSelected:boolean,
    isStartPath:boolean,
    screenWidth:number,
    screenHeight:number
}

export const createMobileMenuItemStyles = ( params:IcreateMobileMenuItemStyles ) => {
    const { index, isInit, isStart, isSelected, isStartPath, screenWidth, screenHeight } = params;
    
    const menuItemInitMarginTop = (screenHeight / 2 )  + MOBILE_PAGE_MENU_CONSTANTS.INIT_EXTRA_MARGIN_TOP +  index * (MOBILE_MENU_CONSTANTS.MENU_ITEM_HEIGHT + MOBILE_MENU_CONSTANTS.MENU_ITEM_GAP_Y)
    const menuItemInitMarginLeft = (screenWidth - MOBILE_MENU_CONSTANTS.MENU_ITEM_WIDTH ) /2 ; 

    const menuItemRunMarginTop = MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_TOP + index * (MOBILE_MENU_CONSTANTS.MENU_ITEM_HEIGHT + MOBILE_MENU_CONSTANTS.MENU_ITEM_GAP_Y);
    const menuItemAnimationParams:IcreateMenuItemAnimation = {
        isInit: isInit,
        isStart: isStart,
        menuItemInitMarginLeft: menuItemInitMarginLeft ,
        menuItemInitMarginTop: menuItemInitMarginTop,
        menuItemRunMarginTop: menuItemRunMarginTop
    } 
    
    const menuItemAnimation = createMenuItemAnimation(menuItemAnimationParams);
    return(
        css({
            display: 'flex',
            lineHeight: '30px',
            justifyContent:'center',
            alignItems:'start',
            position: 'absolute',
            zIndex: 10,
            top: isInit && isStartPath ? menuItemInitMarginTop : menuItemRunMarginTop,
            left:  isInit && isStartPath ? menuItemInitMarginLeft : MOBILE_PAGE_MENU_CONSTANTS.RUN_MARGIN_LEFT,
            fontSize: fontSizes.BIG,
            fontWeight: 50,
            width: MOBILE_MENU_CONSTANTS.MENU_ITEM_WIDTH,
            color: colors.DARKWHITE,
            height: MOBILE_MENU_CONSTANTS.MENU_ITEM_HEIGHT,
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
