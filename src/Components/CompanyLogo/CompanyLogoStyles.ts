import { css, keyframes } from '@emotion/css'
import { colors } from '../../constants/css/colors';
import { fontSizes } from '../../constants/css/fontSizes';
import { ANIMATION_TIMINGS, PAGE_COMPANY_LOGO_CONSTANTS } from '../GlobalConstants';
import { COMPANY_LOGO_CONSTANTS } from './CompanyLogoConstants';


export interface IcreateCompanyLogoStyles {
    isInit:boolean,
    isStart:boolean,
    isInitialPath:boolean,
    screenHeight:number,
    screenWidth:number
}
export const createCompanyLogoStyles =  (params:IcreateCompanyLogoStyles) => {
    const { isInit, isStart, isInitialPath, screenHeight, screenWidth } = params;
    const companyLogoInitMarginTop  = (screenHeight - PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT) / 2;
    const companyLogoInitMarginLeft = (screenWidth - PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH) / 2;

   
    const styles = css({
        zIndex: 12,
        position: 'absolute',
        top: isInit && isInitialPath ? companyLogoInitMarginTop : PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_TOP,
        left: isInit && isInitialPath ? companyLogoInitMarginLeft : PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT,
        width: isInit && isInitialPath ? PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH : PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH,
        height: isInit && isInitialPath ? PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT : PAGE_COMPANY_LOGO_CONSTANTS.RUN_HEIGHT,
        display: 'flex',
        flexDirection: 'row',
        gap: isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.INIT_GAP : COMPANY_LOGO_CONSTANTS.RUN_GAP,
        justifyContent: 'center',
        alignItems:'center',
        animation: isStart ? `${createLogoContainerAnimation({companyLogoInitMarginTop, companyLogoInitMarginLeft})} ${ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
    })
    return styles
}

export interface IcreateSvgAnimation {
    isInit:boolean,
    isInitialPath:boolean
}


export interface IcreateLogoContainerAnimation {
    companyLogoInitMarginTop:number,
    companyLogoInitMarginLeft:number
}
const createLogoContainerAnimation = (animationParams:IcreateLogoContainerAnimation) => keyframes`
    from {
        height: ${PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT}px;
        width:${PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH}px;
        top: ${animationParams.companyLogoInitMarginTop}px;
        left:${animationParams.companyLogoInitMarginLeft}px;
        gap: ${COMPANY_LOGO_CONSTANTS.INIT_GAP}px;
    }
    to {
        height: ${PAGE_COMPANY_LOGO_CONSTANTS.RUN_HEIGHT}px;
        width: ${PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH}px;
        top: ${PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_TOP}px;
        left: ${PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT}px;
        gap: ${COMPANY_LOGO_CONSTANTS.RUN_GAP}px;
    }
`;
