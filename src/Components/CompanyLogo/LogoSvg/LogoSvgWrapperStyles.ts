import { css, keyframes } from '@emotion/css';
import { colors } from '../../../constants/css/colors';
import { ANIMATION_TIMINGS } from '../../../GlobalConstants';
import { COMPANY_LOGO_CONSTANTS } from '../CompanyLogoConstants';

const STROKE_LENGTH = 22585;

interface IcreateLogoSvgWrapperStyles {
    isInit:boolean, 
    isStart:boolean,
    isInitialPath:boolean,
}
export const createLogoSvgWrapperStyles = (params:IcreateLogoSvgWrapperStyles) =>{
    const {isInit, isStart, isInitialPath} = params;

    return(
        css({
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
                animation: createSVGAnimation({isInit, isInitialPath}),
                fill: colors.LIGHTORANGE,
                stroke: `${colors.LIGHTORANGE}`,
            
            }
        })
    )
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