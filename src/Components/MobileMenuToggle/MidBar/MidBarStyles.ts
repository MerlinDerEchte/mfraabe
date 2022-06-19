import { keyframes, css } from "@emotion/css";
import { colors } from "../../../constants/css/colors";
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CANCEL_CONSTANTS } from "../../GlobalConstantsMobile";

interface IcreateMidBarStyles {
    isRun:boolean, 
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean
}

export const createMidBarStyles = (params:IcreateMidBarStyles) => {
    const { isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
    
    return(
        css({
            position:'absolute',
            zIndex: 16,
            content: `''`,
            width:   MOBILE_PAGE_MENU_CANCEL_CONSTANTS.WIDTH - 10,
            opacity: isShowMobileMenu ? 0 : 1,
            height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.LINE_HEIGHT,
            borderRadius: 6,
            top: `40%`,
            left: 10 / 2,
            background: colors.DARKBLUE,
            transfrom: isShowMobileMenu ? 'translateX(-50px)': 'translateX(0px)',
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`,
            '::before':{
                content: `''`,
                background: colors.DARKBLUE,
                position: 'absolute',
                top: 1,
                left: 1,
                width: 'calc(100% - 2)',
                height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.LINE_HEIGHT - 2,
            },
            animation: createMidBarAnimation({
                isRun,
                isShowMobileMenuAnimation,
                isHideMobileMenuAnimation
            })     
        })
    );
}
interface IcreateMidBarAnimation {
    isRun:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean 
}

export const createMidBarAnimation = (params:IcreateMidBarAnimation) => {
    const { isRun, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
    if(isRun && isShowMobileMenuAnimation ){
        return `${showMobileMenuMidBarAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms linear`;
    }
    if(isRun && isHideMobileMenuAnimation){
        return `${hideMobileMenuMidBarAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms linear`;
    }
    return'';
}

const showMobileMenuMidBarAnimation =  keyframes`
    from{
        opacity: 1;
        transform: translateX(0px);
    }
    to{
        opacity: 0;
        transform: translateX(-50px);
    }
`

const hideMobileMenuMidBarAnimation = keyframes`
    from{
        opactiy:0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`