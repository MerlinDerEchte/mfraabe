import { css, keyframes } from '@emotion/css'
import { colors } from '../../constants/css/colors';
import { fontSizes } from '../../constants/css/fontSizes';
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_COMPANY_LOGO_CONSTANTS, MOBILE_PAGE_MENU_CONSTANTS } from '../GlobalConstantsMobile';
import { MOBILE_COMPANY_LOGO_CONSTANTS } from './CompanyLogoConstantsMobile';


const STROKE_LENGTH = 22585;
export interface IcreateMobileCompanyLogoStyles{
    isInit:boolean,
    isStart:boolean,
    isRun:boolean,
    isInitialPath:boolean,
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean, 
    isHideMobileMenuAnimation:boolean,
    screenHeight:number,
    screenWidth:number
}
export const createMobileCompanyLogoStyles =  (params:IcreateMobileCompanyLogoStyles) => {
    const { isInit,isRun, isStart, isInitialPath, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation, screenHeight, screenWidth } = params;
    const companyLogoInitMarginTop  = (screenHeight / 2 - MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT);
    const companyLogoInitMarginLeft = (screenWidth - MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH) / 2;
  

    const styles = css({
        zIndex: 12,
        position: 'absolute',
        top: isInit && isInitialPath ? companyLogoInitMarginTop : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_TOP,
        left: isInit && isInitialPath ? 
            companyLogoInitMarginLeft 
            : 
                isShowMobileMenu 
                ?
                MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT
                :
                -MOBILE_PAGE_MENU_CONSTANTS.RUN_WIDTH,
        width: isInit && isInitialPath ? MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH,
        height: isInit && isInitialPath ? MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_HEIGHT,
        display: 'flex',
        flexDirection: 'row',
        gap: isInit && isInitialPath ? MOBILE_COMPANY_LOGO_CONSTANTS.INIT_GAP : MOBILE_COMPANY_LOGO_CONSTANTS.RUN_GAP,
        justifyContent: 'center',
        alignItems:'center',
        animation: createMobileLogoContainerAnimation({
            isStart,
            isRun,
            companyLogoInitMarginTop,
            companyLogoInitMarginLeft,
            isShowMobileMenu,
            isShowMobileMenuAnimation,
            isHideMobileMenuAnimation
        }),

    })
    return styles
}

export interface IcreateSvgAnimation {
    isInit:boolean,
    isInitialPath:boolean
}


export interface IcreateMobileLogoContainerAnimation {
    isStart:boolean,
    isRun:boolean,
    companyLogoInitMarginTop:number,
    companyLogoInitMarginLeft:number,
    isShowMobileMenu:boolean,
    isShowMobileMenuAnimation:boolean,
    isHideMobileMenuAnimation:boolean,
}
const createMobileLogoContainerAnimation = (params:IcreateMobileLogoContainerAnimation) => {
    const {isStart, isRun, companyLogoInitMarginTop, companyLogoInitMarginLeft, isShowMobileMenu, isShowMobileMenuAnimation, isHideMobileMenuAnimation } = params;
    if(isStart){
        return `${createCompanyLogoStartAnimation({companyLogoInitMarginTop, companyLogoInitMarginLeft})} ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms ease-out`
    }
    if(isRun && isShowMobileMenuAnimation){
        return `${showMobileCompayLogoAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_SHOW_TIME}ms linear`;
    }
    if(isRun && isHideMobileMenuAnimation){
        return `${hideMobileCompanyLogoAnimation} ${MOBILE_ANIMATION_TIMINGS.MENU_HIDE_TIME}ms linear`;
    }
    return'';
}

interface IcreateCompanyLogoStartAnimation {
    companyLogoInitMarginTop:number, 
    companyLogoInitMarginLeft:number
}
const createCompanyLogoStartAnimation = ( params:IcreateCompanyLogoStartAnimation) => {
    const {companyLogoInitMarginLeft, companyLogoInitMarginTop } = params;
    return(
        keyframes`
            from {
                height: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT}px;
                width:${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH}px;
                top: ${companyLogoInitMarginTop}px;
                left:${companyLogoInitMarginLeft}px;
                gap: ${MOBILE_COMPANY_LOGO_CONSTANTS.INIT_GAP}px;
            }
            to {
                height: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_HEIGHT}px;
                width: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH}px;
                top: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_TOP}px;
                left: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT}px;
                gap: ${MOBILE_COMPANY_LOGO_CONSTANTS.RUN_GAP}px;
            }
        `
    )
}
const showMobileCompayLogoAnimation = keyframes(`
    from{
        left: -${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH}px;
    }
    to{
        left: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT}px;  
    }
    `
)

const hideMobileCompanyLogoAnimation = keyframes(`
    from{
        left: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT}px;
    }
    to{
        left: -${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH}px;
    }
`)