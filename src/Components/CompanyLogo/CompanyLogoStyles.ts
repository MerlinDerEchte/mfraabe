import { css, keyframes } from '@emotion/react'
import { colors } from '../../constants/css/colors';
import { fontSizes } from '../../constants/css/fontSizes';
import {INIT_SVG_ANIMATION_TIME, LOGO_UNDERLINE_INIT_DELAY, START_ANIMATION_TIME,UNDERLINE_INIT_ANIMATION_TIME} from  '../../constants/timings';

const COMPANY_LOGO_MID_HEIGHT = '300px';
const COMPANY_LOGO_MID_WIDTH = '600px';

const COMPANY_LOGO_LEFT_HEIGHT = `100px`;
const COMPANY_LOGO_LEFT_WIDTH = '200px';

const COMPANY_LOGO_LEFT_TOP = '0px';
const COMPANY_LOGO_LEFT_LEFT = '0px';
const COMPANY_LOGO_MID_TOP =  'calc(50vh - 200px)';
const COMPANY_LOGO_MID_LEFT =  'calc(50vw - 300px)';
const COMPANY_LOGO_MID_GAP = '50px';
const COMPANY_LOGO_LEFT_GAP = '0px';


const SVG_MID_WIDHT = '200px';
const SVG_MID_HEIGHT = '200px';
const SVG_LEFT_WIDTH = '66px';
const SVG_LEFT_HEIGHT = '66px';

const SVG_MID_MARGIN_TOP = `calc((${COMPANY_LOGO_MID_HEIGHT} - ${SVG_MID_HEIGHT}) / 2 )`;

const SVG_LEFT_MARGIN_TOP = '12px';
const SLOGAN_MID_WIDTH = '300px';
const SLOGAN_MID_HEIGHT = '300px';
const SLOGAN_LEFT_WIDTH = '125px';
const SLOGAN_LEFT_HEIGHT = '100px';


const SLOGAN_LEFT_INNER_MARGIN = '5px';
const SLOGAN_LEFT_ROW_HEIGHT = fontSizes.NORMAL;

const SLOGAN_MID_INNER_MARGIN = '10px';
const SLOGAN_MID_ROW_HEIGHT = fontSizes.HUGE;



const SLOGAN_MID_TOTAL_HEIGHT = `calc(${SLOGAN_MID_INNER_MARGIN} + ${SLOGAN_MID_ROW_HEIGHT } * 2)`;
const SLOGAN_LEFT_TOTAL_HEIGHT = `calc(${SLOGAN_LEFT_INNER_MARGIN} + ${SLOGAN_LEFT_ROW_HEIGHT } * 2)`;

const SLOGAN_MID_MARGIN_TOP = `calc((${SLOGAN_MID_HEIGHT} - ${SLOGAN_MID_TOTAL_HEIGHT}) / 2 )`;
const SLOGAN_LEFT_MARGIN_TOP = `calc((${SLOGAN_LEFT_HEIGHT} - ${SLOGAN_LEFT_TOTAL_HEIGHT}) / 2 )`;
const STROKE_LENGTH = 22585;

export const createCompanyLogoStyles =  (isInit:boolean,isStart:boolean, isInitialPath:boolean) => {
    
    const svgAnimation = createSVGAnimation(isInit, isInitialPath);
    const underlineAnimation = createUnderlineAnimation(isInit);

    const styles = css({
        zIndex: 12,
        position: 'absolute',
        top: isInit && isInitialPath ? COMPANY_LOGO_MID_TOP : COMPANY_LOGO_LEFT_TOP,
        left: isInit && isInitialPath ? COMPANY_LOGO_MID_LEFT : COMPANY_LOGO_LEFT_LEFT,
        width: isInit && isInitialPath ? COMPANY_LOGO_MID_WIDTH : COMPANY_LOGO_LEFT_WIDTH,
        height: isInit && isInitialPath ? COMPANY_LOGO_MID_HEIGHT : COMPANY_LOGO_LEFT_HEIGHT,
        display: 'flex',
        flexDirection: 'row',
        gap: isInit && isInitialPath ? COMPANY_LOGO_MID_GAP : COMPANY_LOGO_LEFT_GAP,
        justifyContent: 'space-around',
        animation: isStart ? `${LogoContainerStartAnimation} ${START_ANIMATION_TIME} ease-out backwards`: '',

        '#LogoSvg': {
            width: isInit && isInitialPath ? SVG_MID_WIDHT :SVG_LEFT_WIDTH ,
            height: isInit && isInitialPath ? SVG_MID_WIDHT :SVG_LEFT_WIDTH ,
            color: colors.DARKBLUE,
            paddingTop: isInit && isInitialPath ? SVG_MID_MARGIN_TOP : SVG_LEFT_MARGIN_TOP,
            animation: isStart ? `${LogoSvgStartAnimation}  ${START_ANIMATION_TIME} ease-out backwards`: '',
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
            marginTop: isInit && isInitialPath ? SLOGAN_MID_MARGIN_TOP : SLOGAN_LEFT_MARGIN_TOP,
            height: isInit && isInitialPath ? SLOGAN_MID_TOTAL_HEIGHT : SLOGAN_LEFT_TOTAL_HEIGHT ,
            width: isInit && isInitialPath ? SLOGAN_MID_WIDTH : SLOGAN_LEFT_WIDTH,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            fontSize: isInit && isInitialPath ? fontSizes.HUGE : fontSizes.NORMAL,
            animation: isStart ? `${SloganStartAnimation}  ${START_ANIMATION_TIME} ease-out backwards`: '',
           
            ".CompanySloganRow":{
                
                flex: '1 1 initial',
                display: 'flex',
                flexDirection: 'row',
                height: isInit && isInitialPath ? `${fontSizes.HUGE}` : `${fontSizes.NORMAL}`,
                alignItems:'center',
                animation: isStart ? `${SloganRowStartAnimation}  ${START_ANIMATION_TIME} ease-out backwards`: '',
                
                '&:first-of-type':{
                    marginBottom: isInit && isInitialPath ? SLOGAN_MID_INNER_MARGIN : SLOGAN_LEFT_INNER_MARGIN,
                },
            },
            
        },
        '#Underline':{
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

const createSVGAnimation = (isInit:boolean, isInitialPath:boolean) => {
    if(isInit && isInitialPath) return`${PaintSvgInitAnimation} ${INIT_SVG_ANIMATION_TIME} ease-in backwards`;

    return'';
}
const createUnderlineAnimation = (isInit:boolean) => {
    if(isInit) return`${UnderlineInitAnimation} ${UNDERLINE_INIT_ANIMATION_TIME} ${LOGO_UNDERLINE_INIT_DELAY} ease-out backwards`;
    return '';
}

const LogoContainerStartAnimation = keyframes`
    from {
        height: ${COMPANY_LOGO_MID_HEIGHT};
        width:${COMPANY_LOGO_MID_WIDTH};
        top: ${COMPANY_LOGO_MID_TOP};
        left:${COMPANY_LOGO_MID_LEFT};
        gap: ${COMPANY_LOGO_MID_GAP};
        
    }
    to {
        height: ${COMPANY_LOGO_LEFT_HEIGHT};
        width: ${COMPANY_LOGO_LEFT_WIDTH};
        top: ${COMPANY_LOGO_LEFT_TOP};
        left: ${COMPANY_LOGO_LEFT_LEFT};
        gap: ${COMPANY_LOGO_LEFT_GAP};
    }
`;

const LogoSvgStartAnimation = keyframes`
    from {
        height: ${SVG_MID_HEIGHT};
        width:${SVG_MID_WIDHT};
        padding-top: ${SVG_MID_MARGIN_TOP};

    }
    to{
        height: ${SVG_LEFT_HEIGHT};
        width:${SVG_LEFT_WIDTH};
        padding-top: ${SVG_LEFT_MARGIN_TOP};
    }
`

const SloganStartAnimation = keyframes`
    from{
        height:${SLOGAN_MID_TOTAL_HEIGHT};
        width: ${SLOGAN_MID_WIDTH};
        font-size: ${fontSizes.HUGE};
        margin-top:${SLOGAN_MID_MARGIN_TOP};
    }
    to{
        height: ${SLOGAN_LEFT_TOTAL_HEIGHT};
        width: ${SLOGAN_LEFT_WIDTH};
        font-size: ${fontSizes.NORMAL};
        margin-top: ${SLOGAN_LEFT_MARGIN_TOP};
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

const SVGInitAnmation = keyframes`
    0%{
        opacity:0;
        fill:${colors.LIGHTORANGE};
        stroke:  ${colors.LIGHTORANGE};
        stroke-width: 15;
        transform:translateX(100%);
    }
  
    30%{
        opacity: 1;
        fill:${colors.LIGHTORANGE};
        stroke: ${colors.LIGHTORANGE};
        stroke-width: 15;
        transform:translateX(100%);
    }
    50%{
        opacity: 1;
        fill:${colors.LIGHTORANGE};
        stroke: ${colors.LIGHTORANGE};
        stroke-width: 50;
        transform:translateX(100%);
    }
   
  
    90%{
        fill: ${colors.LIGHTORANGE};
        stroke: ${colors.LIGHTORANGE};
        stroke-width: 10;
        transform:translateX(100%);
    }
   
    100%{
        stroke:${colors.LIGHTORANGE};
        stroke-width: 10;
        fill:${colors.LIGHTORANGE};
        transform:translateX(0);
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