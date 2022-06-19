import { keyframes, css } from "@emotion/css";
import { colors } from "../../../constants/css/colors";
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_MENU_TOGGLE_CONSTANTS } from "../../GlobalConstantsMobile";

interface IcreateTopBarStyles {
    isRun:boolean, 
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean
}

export const createTopBarStyles = (params:IcreateTopBarStyles) => {
    const { isRun, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
    
    return(
        css({
            position:'absolute',
            content: `''`,
            width:  MOBILE_PAGE_MENU_TOGGLE_CONSTANTS.WIDTH,
            height: MOBILE_PAGE_MENU_TOGGLE_CONSTANTS.LINE_HEIGHT,
            borderRadius: 10,
            zIndex: 10,
            top:  isShowMobileMenu ? '33%' : '0%',
            left: '0%',
            transform:  isShowMobileMenu ? `rotateZ(45deg)` : 'rotateZ(0deg)',
            background: colors.DARKBLUE,
            boxShadow: !isShowMobileMenu ? `0px 0px 3px 1px ${colors.LIGHTORANGE}` : '',
            '::before':{
                zIndex: 20,
                content: `''`,
                background:  isShowMobileMenu ? colors.LIGHTORANGE : colors.DARKBLUE,
                position: 'absolute',
                borderRadius: 10,
                top: '1%',
                left: '1%',
                width: '98%',
                height: '98%',
            },
            animation: createTopBarAnimation({
                isRun,
                isShowMobileMenuAnimation,
                isHideMobileMenuAnimation
        })
            
        })
    )

}
interface IcreateTopBarAnimation {
    isRun:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean 
}

export const createTopBarAnimation = (params:IcreateTopBarAnimation) => {
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
        top: 0%;
        transform: rotateZ(0deg);
        }
    to{
        transform: rotateZ(45deg);
        top: 33%;
    }
`

const hideMobileMenuBottomBarAnimation = keyframes`
    from{
        transform: rotateZ(45deg);
        top: 33%;
    }
    to{
        transform: rotateZ(0deg);
        top: 0%;
    }
`