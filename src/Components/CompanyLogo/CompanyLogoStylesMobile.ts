import { css, keyframes } from '@emotion/css'
import { colors } from '../../constants/css/colors';
import { fontSizes } from '../../constants/css/fontSizes';
import { MOBILE_ANIMATION_TIMINGS, MOBILE_PAGE_COMPANY_LOGO_CONSTANTS } from '../../GlobalConstantsMobile';
import { MOBILE_COMPANY_LOGO_CONSTANTS } from './CompanyLogoConstantsMobile';


const STROKE_LENGTH = 22585;
export interface IcreateMobileCompanyLogoStyles{
    isInit:boolean,
    isStart:boolean,
    isInitialPath:boolean,
    screenHeight:number,
    screenWidth:number
}
export const createMobileCompanyLogoStyles =  (params:IcreateMobileCompanyLogoStyles) => {
    const { isInit, isStart, isInitialPath, screenHeight, screenWidth } = params;
    const companyLogoInitMarginTop  = (screenHeight / 2 - MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT);
    const companyLogoInitMarginLeft = (screenWidth - MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH) / 2;
  

    const styles = css({
        zIndex: 12,
        position: 'absolute',
        top: isInit && isInitialPath ? companyLogoInitMarginTop : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_TOP,
        left: isInit && isInitialPath ? companyLogoInitMarginLeft : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT,
        width: isInit && isInitialPath ? MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH,
        height: isInit && isInitialPath ? MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT : MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_HEIGHT,
        display: 'flex',
        flexDirection: 'row',
        gap: isInit && isInitialPath ? MOBILE_COMPANY_LOGO_CONSTANTS.INIT_GAP : MOBILE_COMPANY_LOGO_CONSTANTS.RUN_GAP,
        justifyContent: 'center',
        alignItems:'center',
        animation: isStart ? `${createMobileLogoContainerAnimation({companyLogoInitMarginTop, companyLogoInitMarginLeft})} ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',

    })
    return styles
}

export interface IcreateSvgAnimation {
    isInit:boolean,
    isInitialPath:boolean
}

const createMobileSVGAnimation = (inputParams:IcreateSvgAnimation) => {
    const { isInit, isInitialPath } = inputParams;
    if(isInit && isInitialPath) return`${MobilePaintSvgInitAnimation} ${MOBILE_ANIMATION_TIMINGS.INIT_LOGO_TIME}ms ease-in backwards`;

    return'';
}

const createMobileUnderlineAnimation = (isInit:boolean) => {
    if(isInit) return`${MobileUnderlineInitAnimation} ${MOBILE_ANIMATION_TIMINGS.INIT_UNDERLINE_TIME}ms ${MOBILE_ANIMATION_TIMINGS.INIT_UNDERLINE_DELAY}ms ease-out backwards`;
    return '';
}

export interface IcreateMobileLogoContainerAnimation {
    companyLogoInitMarginTop:number,
    companyLogoInitMarginLeft:number
}
const createMobileLogoContainerAnimation = (animationParams:IcreateMobileLogoContainerAnimation) => keyframes`
    from {
        height: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT}px;
        width:${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH}px;
        top: ${animationParams.companyLogoInitMarginTop}px;
        left:${animationParams.companyLogoInitMarginLeft}px;
        gap: ${MOBILE_COMPANY_LOGO_CONSTANTS.INIT_GAP}px;
    }
    to {
        height: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_HEIGHT}px;
        width: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_WIDTH}px;
        top: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_TOP}px;
        left: ${MOBILE_PAGE_COMPANY_LOGO_CONSTANTS.RUN_MARGIN_LEFT}px;
        gap: ${MOBILE_COMPANY_LOGO_CONSTANTS.RUN_GAP}px;
    }
`;

const MobileLogoSvgStartAnimation = keyframes`
    from {
        height: ${MOBILE_COMPANY_LOGO_CONSTANTS.SVG.INIT_HEIGHT}px;
        width:${MOBILE_COMPANY_LOGO_CONSTANTS.SVG.INIT_WIDTH}px;
    }
    to{
        height: ${MOBILE_COMPANY_LOGO_CONSTANTS.SVG.RUN_HEIGHT}px;
        width:${MOBILE_COMPANY_LOGO_CONSTANTS.SVG.RUN_WIDTH}px;
    }
`
export interface IcreateMobileSloganStartAnimation {
    sloganInitTotalHeight:number,
    sloganRunTotalHeight:number
}
const createMobileSloganStartAnimation = (animationParams:IcreateMobileSloganStartAnimation) => keyframes`
    from{
        height:${animationParams.sloganInitTotalHeight}px;
        width: ${MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_WIDTH}px;
        font-size: ${fontSizes.HUGE};
        }
    to{
        height: ${animationParams.sloganRunTotalHeight}px;
        width: ${MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_WIDTH}px;
        font-size: ${fontSizes.NORMAL};
    }
`
const MobileSloganRowStartAnimation = keyframes`
    from{
        height:${fontSizes.HUGE};
    }
    to{
        height: ${fontSizes.NORMAL};
    }
`
const MobilePaintSvgInitAnimation = keyframes`
    0%{
        stroke-dasharray: ${STROKE_LENGTH};
        stroke-dashoffset: ${STROKE_LENGTH};   
        fill: ${colors.DARKBLUE};   
        transform:translateX(100%);
    }
    20%{
        stroke-dasharray: ${STROKE_LENGTH};
        stroke: ${colors.LIGHTORANGE}
        transform:translateX(100%);
    }
    35%{
        stroke-dasharray: ${STROKE_LENGTH};
        stroke-dashoffset: 0;
        fill: ${colors.DARKBLUE}; 
        transform:translateX(100%);
        
    }
    70%{
        stroke-dasharray: ${STROKE_LENGTH};
        stroke-dashoffset: 0;
        fill: ${colors.LIGHTORANGE};
        transform:translateX(100%);
    }
    100%{
        stroke-dasharray: ${STROKE_LENGTH};
        stroke-dashoffset: 0;
        fill: ${colors.LIGHTORANGE};
        transform:translateX(0%);
    }

`;
const MobileUnderlineInitAnimation = keyframes`
    0%{
        left: 50%;
        background-color: ${colors.LIGHTORANGE};
        bottom: 0;
        height: 0px;
        borderRadius: 5px;
        width: 0%;
    }
    100%{
        left: 0;
        background-color: ${colors.LIGHTORANGE},
        bottom: 0;
        height: 3px,
        borderRadius: 5px;
        width: 100%;
    }
`