import { css, keyframes } from '@emotion/react';
import { colors } from '../../../../../../../constants/css/colors';
import { fontSizes } from '../../../../../../../constants/css/fontSizes';
import {
    SERVICE_CARD_HOVER_ANIMATION_TIME,
    SERVICE_CARD_SELECTION_ANIMATION_TIME,
    SERVICE_CARD_START_ANIMATION_TIME,
    SERVICE_CARD_START_ANIMATION_DELAY_STEP,
    SERVICE_CARD_START_ANIMATION_DELAY,
    SERVICE_CARD_DESELECTION_ANIMATION_DELAY,
    SERVICE_CARD_DESELECTION_ANIMATION_TIME
    } from '../../../../../../../constants/timings';
import { getIsSelectedAndDeselecting } from '../../../ServiceUtils';


const SERVICE_CARD_WIDTH = '200px';
const SERVICE_CARD_HEIGHT = '200px';
const SERVICE_CARD_GAP = '50px';

const SERVICE_CARD_CONTENT_MARGIN_TOP = '50px';
const SERVICE_CARD_SELECTED_MARGIN_TOP = '10px';

const SERVICE_CARD_SELECTION_TRANSLATE_Y = `calc( -${SERVICE_CARD_HEIGHT} + ( ${SERVICE_CARD_CONTENT_MARGIN_TOP} -  ${SERVICE_CARD_SELECTED_MARGIN_TOP}))`;
export const createServiceCardStyles = (index:number,isInit:boolean,isStart:boolean, isRun:boolean,isSelected:boolean, isOneSelected:boolean, isSelectedAndDeselecting:boolean, isOtherSelectedAndDeselecting:boolean) => {
    

    const cardAnimation = createCardAnimation(index, isInit, isStart,isRun, isSelected, isOneSelected, isSelectedAndDeselecting, isOtherSelectedAndDeselecting);
    const cardContentAnimation = createCardContentAnimation(isRun,isSelected,isSelectedAndDeselecting);
    const cardHoverAnimation = createCardHoverAnimation(isRun,isSelected);
    const cardHoverTitleUnderlineAnimation = createCardHoverUnderlineAnimation(isRun,isSelected);
    const cardHoverSvgAnimation = createCardHoverSvgAnimation(isRun, isSelected);


    return(
        css({
            position: 'absolute',
            top: '0px',
            left: `calc(0px + ${index} * (${SERVICE_CARD_WIDTH} + ${SERVICE_CARD_GAP} ))`,
            width: SERVICE_CARD_WIDTH,
            opacity: isInit ? 0 : isSelected ? 1 : isOneSelected ? 0.2 : 1,
            height:SERVICE_CARD_HEIGHT,
            borderRadius: 10,
            color: isSelected ? colors.LIGHTORANGE : colors.DARKWHITE,
            transform: isSelected && !isSelectedAndDeselecting ? `translateY(${SERVICE_CARD_SELECTION_TRANSLATE_Y})`: 'translateY(0)',
            animation: cardAnimation, 

        
            '.serviceCardTitle':{
                display:'block',
                position: 'relative',
                textAlign: 'center',
                verticalAlign: 'middle',
                height: 50,
                fontSize: fontSizes.NORMAL,
        
                '.serviceCardTitleUnderline': {
                    display: isSelected ? 'none' : 'block',
                    position: 'absolute',
                    top:'50px',
                    left: '15px',
                    width: `calc(${SERVICE_CARD_WIDTH} - 30px)`,
                    background: colors.LIGHTORANGE,
                    animation: `${isStart ? `${ServiceCardStartUnderlineAnimation} calc(${SERVICE_CARD_START_ANIMATION_TIME} + ${index} * 0.2s ) ease-out .3s backwards` : '' } `, 
                    height: 2,
                },
            },
        
            '.serviceCardContent':{
                marginTop: isSelected ? SERVICE_CARD_SELECTED_MARGIN_TOP : SERVICE_CARD_CONTENT_MARGIN_TOP,
                flex:'0 0 auto',
                fontFize: fontSizes.SMALL,
                height:100,
                flexDirection: 'column',
                textAlign: 'center',
                verticalAlign: 'middle',
                position: 'relative',
                marginLeft: 15,
                width: `calc(${SERVICE_CARD_WIDTH} - 30px)`,
                overflowWrap: 'break-word',
                fill: colors.DARKWHITE,
                animation: cardContentAnimation,
                
                'svg':{
                        fill: colors.DARKWHITE,
                        height:80,
                       
                },
            },
        
            '&:hover':{        
                cursor: isSelected && !isSelectedAndDeselecting ? '' :'pointer',
                animation: cardHoverAnimation,
                transform: isSelected ?`translateY(${SERVICE_CARD_SELECTION_TRANSLATE_Y})`: 'translateY(-10px)'  ,
        
                '.serviceCardTitle':{
        
                    '.serviceCardTitleUnderline':{
                        bottom:0,
                        left:0,
                        width:SERVICE_CARD_WIDTH, 
                        background: colors.LIGHTORANGE,
                        animation: cardHoverTitleUnderlineAnimation, 
                        height: 2,
                    }
                },
                '.serviceCardContent':{   
                    'svg':{
                        fill: isSelected ? colors.DARKWHITE : isOneSelected ? colors.DARKWHITE : colors.LIGHTORANGE,
                        animation:  cardHoverSvgAnimation, 
                    },
                }
            },
        })
    )
}

const createCardAnimation = (index:number,isInit:boolean,isStart:boolean, isRun:boolean, isSelected:boolean,isOneSelected:boolean,isSelectedAndDeselecting:boolean,isOtherSelectedAndDeselecting:boolean) => {

    if( isStart){
        //calc(${SERVICE_CARD_START_ANIMATION_DELAY} + ( ${index} * ${SERVICE_CARD_START_ANIMATION_DELAY_STEP}))
        return `${ServiceCardStartAnimation} ${SERVICE_CARD_START_ANIMATION_TIME} ease-in-out calc(${SERVICE_CARD_START_ANIMATION_DELAY} + ${index} * ${SERVICE_CARD_START_ANIMATION_DELAY_STEP})  backwards`;
    }

    if(isRun && isSelectedAndDeselecting){
        return `${ServiceCardDeselectionAnimation} ${SERVICE_CARD_DESELECTION_ANIMATION_TIME} ease-out ${SERVICE_CARD_DESELECTION_ANIMATION_DELAY} backwards`;
    }
    if(isRun && isSelected){
        return `${ServiceCardSelectionAnimation} ${SERVICE_CARD_SELECTION_ANIMATION_TIME} ease-in-out backwards`;
    }
    if(isRun && isOtherSelectedAndDeselecting){
        return `${ServiceCardOtherServiceDeselectionAnimation} ${SERVICE_CARD_DESELECTION_ANIMATION_TIME} ease-in-out ${SERVICE_CARD_DESELECTION_ANIMATION_DELAY} backwards`;
    }
    if(isRun && !isSelected && isOneSelected){
        return `${ServiceCardOtherServiceSelectionAnimation} ${SERVICE_CARD_SELECTION_ANIMATION_TIME} ease-in-out  backwards`;
    }
}

const createCardContentAnimation = (isRun:boolean,isSelected:boolean, isSelectedAndDeselecting:boolean)  => {
    if(isRun && !isSelected){
        return '';
    }
    if(isRun && isSelectedAndDeselecting){
        return `${ServiceCardContentDeselectionAnimation}  ${SERVICE_CARD_DESELECTION_ANIMATION_TIME} ease-out ${SERVICE_CARD_DESELECTION_ANIMATION_DELAY} backwards`;
    }

    if(isSelected){
        return `${ServiceCardContentSelectionAnimation} ${SERVICE_CARD_SELECTION_ANIMATION_TIME} ease-in-out backwards`;
    }
    return '';
}

const createCardHoverAnimation =  (isRun:boolean,isSelected:boolean) => {
    if(isRun && !isSelected){
        return `${ServiceCardHoverAnimation} ${SERVICE_CARD_HOVER_ANIMATION_TIME} ease-out  backwards`;
    }

    if(isSelected){
        return '';
    }
    return '';
}

const createCardHoverUnderlineAnimation =  (isRun:boolean,isSelected:boolean)  => {
    if(isRun && !isSelected){
        return `${ServiceCardTitleUnderlineHoverAnimation}  ${SERVICE_CARD_HOVER_ANIMATION_TIME} ease-out backwards`
    }

    if(isSelected){
        return ''
    };
    return '';
}

const createCardHoverSvgAnimation =  (isRun:boolean,isSelected:boolean)  => {
    if(isRun && !isSelected){
        return `${ServiceCardHoverIconAnimation} ${SERVICE_CARD_HOVER_ANIMATION_TIME} ease-out backwards`
    }

    if(isSelected){
        return ''
    };
    return '';
}

const ServiceCardStartAnimation = keyframes`
    from{
        transform: translateY(-50px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity: 1;
    }
`;


const ServiceCardStartUnderlineAnimation = keyframes`
    0%{
        left: calc(${SERVICE_CARD_WIDTH} / 2 ); width:  10px;
    }
    100% {
        left: 10; width: calc(${SERVICE_CARD_WIDTH} - 20px);
    }
`;

const ServiceCardHoverAnimation:any= keyframes`
    0%{
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-10px);
    }
`;

const ServiceCardTitleUnderlineHoverAnimation= keyframes`
    0%{
        left:10px; width: calc(${SERVICE_CARD_WIDTH} - 20px);
    }
    100% {
        left: 0px; right: ${SERVICE_CARD_WIDTH};
    }
`;

const ServiceCardHoverIconAnimation = keyframes`
    0%{ 
        fill: ${colors.DARKWHITE};	
    }
    100%{
        fill: ${colors.LIGHTORANGE};
    }
`;

const ServiceCardSelectionAnimation = keyframes`
    0%{
        transform:translateY(0px);
    }
    100% {
        transform:translateY(${SERVICE_CARD_SELECTION_TRANSLATE_Y});
    }
`
const ServiceCardDeselectionAnimation = keyframes`
    0%{
        transform:translateY(${SERVICE_CARD_SELECTION_TRANSLATE_Y});
    }
    100% {
        transform:translateY(0px);
    }
`;


const ServiceCardContentSelectionAnimation = keyframes`
    0%{
        margin-top:${SERVICE_CARD_CONTENT_MARGIN_TOP};
    }
    100% {
        margin-top:${SERVICE_CARD_SELECTED_MARGIN_TOP};
    }
`
const ServiceCardContentDeselectionAnimation = keyframes`
0%{
    margin-top:${SERVICE_CARD_SELECTED_MARGIN_TOP};
}
100% {
    margin-top:${SERVICE_CARD_CONTENT_MARGIN_TOP};
}

`
const ServiceCardOtherServiceSelectionAnimation = keyframes`
    0%{
        opacity:1;
    }
    100%{
        opacity:0.2;
    }
`;

const ServiceCardOtherServiceDeselectionAnimation = keyframes`
    0%{
        opacity:0.2;
    }
    100%{
        opacity:1;
    }
`;