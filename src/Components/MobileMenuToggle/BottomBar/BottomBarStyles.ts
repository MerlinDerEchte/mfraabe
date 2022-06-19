import { keyframes, css } from "@emotion/css";
import { colors } from "../../../constants/css/colors";
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_CANCEL_CONSTANTS } from "../../GlobalConstantsMobile";

interface IcreateBottomBarStyles {
    isRun:boolean, 
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean
}

export const createBottomBarStyles = (params:IcreateBottomBarStyles) => {
    const { isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
    
    return(
        css({
            position:'absolute',
            zIndex: 16,
            content: `''`,
            width: '100%',
            height: MOBILE_PAGE_MENU_CANCEL_CONSTANTS.LINE_HEIGHT,
            borderRadius: 10,
            top: isShowMobileMenu ? '25%' : '80%',
            left: isShowMobileMenu ? '50%' : '0%' ,
            transform: isShowMobileMenu ? `rotateZ(-45deg) `: `rotateZ(0deg)`,
            background: colors.DARKBLUE,
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`,
            animation: createBottomBarAnimation({
                isRun,
                isShowMobileMenuAnimation,
                isHideMobileMenuAnimation
            }),
            '::before':{
                content: `''`,
                background: colors.DARKBLUE,
                position: 'absolute',
                borderRadius: 10,
                top: '1%',
                left: '1%',
                width: '98%',
                height: '98%',
            }
            
        })
    )

}
interface IcreateBottomBarAnimation {
    isRun:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean 
}

export const createBottomBarAnimation = (params:IcreateBottomBarAnimation) => {
    const { isRun, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
    if(isRun && isShowMobileMenuAnimation ){
        return `${showMobileMenuBottomBarAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms linear`;
    }
    if(isRun && isHideMobileMenuAnimation){
        return `${hideMobileMenuBottomBarAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms linear`;
    }
    return'';
}

const showMobileMenuBottomBarAnimation =  keyframes`
    from{
        transform: rotateZ(0deg);
        top: 80%;
        left: 0%;
    }
    to{
        transform: rotateZ(-45deg);
        top: 25%;
        left: 50%;
    }
`

const hideMobileMenuBottomBarAnimation = keyframes`
    from{
        transform: rotateZ(-45deg);
        top: 25%;
        left: 50%;
    }
    to{
        transform: rotateZ(0deg);
        top: 80%;
        legt: 0%;
    }
`