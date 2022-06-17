import { css } from '@emotion/css';
import { colors } from '../../../../constants/css/colors';
import { fontSizes } from '../../../../constants/css/fontSizes';
import { PAGE_COMPANY_LOGO_CONSTANTS, PAGE_MENU_CONSTANTS } from '../../../GlobalConstants';
import { MENU_CONSTANTS } from '../../MenuConstants';
import { createMenuItemAnimation, IcreateMenuItemAnimation } from './MenuItemAnimations';


export interface IcreateMenuItemStyles {
    index:number,
    isInit:boolean,
    isStart:boolean,
    isSelected:boolean,
    isStartPath:boolean,
    screenWidth:number,
    screenHeight:number
}

export const createMenuItemStyles = (params:IcreateMenuItemStyles) => {
    const {index, isInit, isStart, isSelected, isStartPath, screenWidth, screenHeight } = params;
    const menuWidth = 3 * MENU_CONSTANTS.MENU_ITEM_WIDTH + 2 * MENU_CONSTANTS.MENU_ITEM_GAP_X;
    
    const menuItemInitMarginTop = (screenHeight - PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT / 2) + PAGE_MENU_CONSTANTS.INIT_EXTRA_MARGIN_TOP
    const menuItemInitMarginLeft = (screenWidth -  menuWidth) / 2 + index * ( MENU_CONSTANTS.MENU_ITEM_WIDTH + MENU_CONSTANTS.MENU_ITEM_GAP_X ); 

    const menuItemRunMarginTop = PAGE_MENU_CONSTANTS.RUN_MARGIN_TOP + index * (MENU_CONSTANTS.MENU_ITEM_HEIGHT + MENU_CONSTANTS.MENU_ITEM_GAP_Y);
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
            left:  isInit && isStartPath ? menuItemInitMarginLeft : PAGE_MENU_CONSTANTS.RUN_MARGIN_LEFT,
            fontSize: fontSizes.BIG,
            fontWeight: 50,
            width: MENU_CONSTANTS.MENU_ITEM_WIDTH,
            color: colors.DARKWHITE,
            height: MENU_CONSTANTS.MENU_ITEM_HEIGHT,
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
