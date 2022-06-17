import {css,keyframes } from '@emotion/css';
import { colors } from '../../constants/css/colors';
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CANCEL_CONSTANTS } from '../GlobalConstantsMobile';


interface IcreateMobileMenuCancelStyles {
   
    isRun:boolean, 
    isShowMobileMenu:boolean,

}


export const createMobileMenuCancelStyles = (params:IcreateMobileMenuCancelStyles) => {
    const { isRun, isShowMobileMenu } = params;
    const aboutCancelAnimation = createMobileMenuCancelAnimation({ isRun, isShowMobileMenu});

    return css({
        animation: aboutCancelAnimation,
        position:'absolute',
        opacity: isShowMobileMenu ? 1 : 0,
        right:  0,
        top: 0,
        zIndex: 15,
        width: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.WIDTH,
        height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.HEIGHT,
        
        '.xBackground':{
            position:'absolute',
            content: `''`,
            width: '100%',
            height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.LINE_HEIGHT,
            borderRadius: 6,
            zIndex: 16,
            top: '50%',
            left: '0',
            transform: `rotateZ(45deg)`,
            background: colors.DARKBLUE,
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`
        },
        '.xForeground':{
            position:'absolute',
            zIndex: 16,
            content: `''`,
            width:'100%',
            height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.LINE_HEIGHT,
            borderRadius: 6,
            top: '50%',
            left: '0',
            transform: `rotateZ(-45deg)`,
            background: colors.DARKBLUE,
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`,

            '::before':{
                content: `''`,
                background: colors.DARKBLUE,
                position: 'absolute',
                top: -6,
                left: `calc((100% - 4px) / 2)`,
                width: '4px',
                height: '16px',
            }
        },
        '&:hover':{
            cursor:'pointer',
           
            '.xForeground':{
                boxShadow: `0px 0px 3px 1px ${colors.DARKWHITE}`,
                background: colors.DARKWHITE,
                animation: `${cancelXHoverAnimation} ${MOBILE_ANIMATION_TIMINGS.RUN_MENU_CANCEL_HOVER}ms ease-in-out 0s backwards`,
                '::before': {
                    background: colors.DARKWHITE,
                    animation: `${cancelXHoverBeforeAnimation} ${MOBILE_ANIMATION_TIMINGS.RUN_MENU_CANCEL_HOVER}ms ease-in-out 0s backwards`,
                }
               
            },
            '.xBackground':{
                boxShadow: `0px 0px 3px 1px ${colors.DARKWHITE}`,
                background: colors.DARKWHITE,
                animation: `${cancelXHoverAnimation} ${MOBILE_ANIMATION_TIMINGS.RUN_MENU_CANCEL_HOVER}ms ease-in-out 0s backwards`,
            }
        }
    });
}


interface IcreateMobileMenuCancelAnimation {
   
    isRun:boolean,    
    isShowMobileMenu: boolean,

}
const createMobileMenuCancelAnimation = (params:IcreateMobileMenuCancelAnimation) => {
    const { isRun, isShowMobileMenu } = params;
 
    if(isShowMobileMenu && isRun){
        return `${showMenuAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms ease-in-out backwards`;
    }

    return `${hideMenuAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms  ease-in-out 0s backwards`
  
}
const showMenuAnimation = keyframes`
    from{
        opacity:0;
      
        right: 0px;
    }   
    to{
        opactiy:1;
       
        right: 0px;
    }
`;
const hideMenuAnimation = keyframes`
    from{
        opactiy:1;
     
        right: 0px;
    }   
    to{
        opacity:0;
      
        right: 0px;
    }
`;

const cancelXHoverAnimation = keyframes`
    from{
        boxShadow: 0px 0px 3px 1px ${colors.LIGHTORANGE};
        background: ${colors.DARKBLUE};
    }
    to{
        boxShadow: 0px 0px 3px 1px ${colors.DARKWHITE};
        background: ${colors.DARKWHITE};
    }
`
const cancelXHoverBeforeAnimation = keyframes`
    from{
        background: ${colors.DARKBLUE};
    }
    to{
        background: ${colors.DARKWHITE};
    }
`