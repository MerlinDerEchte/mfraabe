import { css, keyframes } from '@emotion/react'
import { colors } from '../../constants/css/colors';
import { fontSizes } from '../../constants/css/fontSizes';
import { ANIMATION_TIMINGS, PAGE_COMPANY_LOGO_CONSTANTS } from '../../GlobalConstants';
import { COMPANY_LOGO_CONSTANTS } from './CompanyLogoConstants';


const STROKE_LENGTH = 22585;

export const createCompanyLogoStyles =  (isInit:boolean,isStart:boolean, isInitialPath:boolean, screenHeight:number, screenWidth:number) => {
    
    const sloganInitTotalHeight = COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_GAP + 2 * COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_ROW_HEIGHT;
    const sloganRunTotalHeight = COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_GAP + 2 * COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_ROW_HEIGHT;
    const companyLogoInitMarginTop  = (screenHeight - PAGE_COMPANY_LOGO_CONSTANTS.INIT_HEIGHT) / 2;
    const companyLogoInitMarginLeft = (screenWidth - PAGE_COMPANY_LOGO_CONSTANTS.INIT_WIDTH) / 2;
    const svgAnimationParams:IcreateSvgAnimation = {
        isInit: isInit,
        isInitialPath: isInitialPath
    } 
    const svgAnimation = createSVGAnimation(svgAnimationParams);
    const underlineAnimation = createUnderlineAnimation(isInit);

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

        '#LogoSvg': {
            flex:'0 0 auto',
            width: isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.SVG.INIT_WIDTH : COMPANY_LOGO_CONSTANTS.SVG.RUN_WIDTH ,
            height: isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.SVG.INIT_WIDTH : COMPANY_LOGO_CONSTANTS.SVG.RUN_WIDTH ,
            color: colors.DARKBLUE,
            animation: isStart ? `${LogoSvgStartAnimation}  ${ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
            
            'svg':{
                strokeDasharray: STROKE_LENGTH ,
                strokeDashoffset: isInit && isInitialPath ? STROKE_LENGTH : 0,
                height: '100%',
                width: '100%',
                strokeWidth: '10',
                animation: svgAnimation,
                fill: colors.LIGHTORANGE,
                stroke: `${colors.LIGHTORANGE}`,
            
            }
        },

        '.CompanySlogan':{
            flex:'0 0 auto',
            //marginTop: isInit && isInitialPath ? SLOGAN_MID_MARGIN_TOP : SLOGAN_LEFT_MARGIN_TOP,
            height: isInit && isInitialPath ? sloganInitTotalHeight : sloganRunTotalHeight ,
            width: isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_WIDTH : COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_WIDTH,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap:  isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_GAP : COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_GAP,
            alignItems: 'center',
            fontSize: isInit && isInitialPath ? fontSizes.HUGE : fontSizes.NORMAL,
            animation: isStart ? `${createSloganStartAnimation({sloganInitTotalHeight, sloganRunTotalHeight})}  ${ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
           
            ".CompanySloganRow":{
                
                flex: '1 1',
                display: 'flex',
                flexDirection: 'row',
                height: isInit && isInitialPath ? `${fontSizes.HUGE}` : `${fontSizes.NORMAL}`,
                alignItems:'center',
                justifyContent: 'center',
                animation: isStart ? `${SloganRowStartAnimation}  ${ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
            },
            
        },
        '#Underline':{
            flex: 0,
            position:'absolute',
            left:  isInit && isInitialPath  ? 0 : '5%',
            backgroundColor: colors.LIGHTORANGE,
            bottom: 0,
            height: 3,
            borderRadius: '5px',
            width: isInit && isInitialPath ? '100%' : '90%',
            animation: underlineAnimation,
          }

    })
    return styles
}

export interface IcreateSvgAnimation {
    isInit:boolean,
    isInitialPath:boolean
}

const createSVGAnimation = (inputParams:IcreateSvgAnimation) => {
    const { isInit, isInitialPath } = inputParams;
    if(isInit && isInitialPath) return`${PaintSvgInitAnimation} ${ANIMATION_TIMINGS.INIT_LOGO_TIME}ms ease-in backwards`;

    return'';
}

const createUnderlineAnimation = (isInit:boolean) => {
    if(isInit) return`${UnderlineInitAnimation} ${ANIMATION_TIMINGS.INIT_UNDERLINE_TIME}ms ${ANIMATION_TIMINGS.INIT_UNDERLINE_DELAY}ms ease-out backwards`;
    return '';
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

const LogoSvgStartAnimation = keyframes`
    from {
        height: ${COMPANY_LOGO_CONSTANTS.SVG.INIT_HEIGHT}px;
        width:${COMPANY_LOGO_CONSTANTS.SVG.INIT_WIDTH}px;
    }
    to{
        height: ${COMPANY_LOGO_CONSTANTS.SVG.RUN_HEIGHT}px;
        width:${COMPANY_LOGO_CONSTANTS.SVG.RUN_WIDTH}px;
    }
`
export interface IcreateSloganStartAnimation {
    sloganInitTotalHeight:number,
    sloganRunTotalHeight:number
}
const createSloganStartAnimation = (animationParams:IcreateSloganStartAnimation) => keyframes`
    from{
        height:${animationParams.sloganInitTotalHeight}px;
        width: ${COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_WIDTH}px;
        font-size: ${fontSizes.HUGE};
        }
    to{
        height: ${animationParams.sloganRunTotalHeight}px;
        width: ${COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_WIDTH}px;
        font-size: ${fontSizes.NORMAL};
    }
`
const SloganRowStartAnimation = keyframes`
    from{
        height:${fontSizes.HUGE};
    }
    to{
        height: ${fontSizes.NORMAL};
    }
`
const PaintSvgInitAnimation = keyframes`
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
const UnderlineInitAnimation = keyframes`
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