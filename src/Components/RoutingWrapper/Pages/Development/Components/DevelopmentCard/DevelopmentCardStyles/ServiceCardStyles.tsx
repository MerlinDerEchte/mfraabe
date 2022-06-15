import { css } from '@emotion/react';
import { colors } from '../../../../../../../constants/css/colors';
import { fontSizes } from '../../../../../../../constants/css/fontSizes';
import { DEVELOPMENT_CARD_CONSTANTS, DEVELOPMENT_ANIMATION_TIMINGS } from '../../../DevelopmentConstants';
import { createServiceCardDeselectAnimation, createServiceCardSelectionAnimation,ServiceCardStartUnderlineAnimation, ServiceCardContentDeselectionAnimation, ServiceCardContentSelectionAnimation, ServiceCardHoverAnimation, ServiceCardHoverIconAnimation, ServiceCardOtherServiceDeselectionAnimation, ServiceCardOtherServiceSelectionAnimation, ServiceCardStartAnimation, ServiceCardTitleUnderlineHoverAnimation } from './ServiceCardAnimations';
export const createServiceCardStyles = (index:number,isInit:boolean,isStart:boolean, isRun:boolean,isSelected:boolean, isOneSelected:boolean,isSelecting:boolean, isSelectedAndDeselecting:boolean, isOtherSelectedAndDeselecting:boolean) => {
    
    const cardAnimation = createCardAnimation(index,isStart,isRun,isSelected, isSelecting, isOneSelected, isSelectedAndDeselecting, isOtherSelectedAndDeselecting);
    const cardContentAnimation = createCardContentAnimation(isRun, isSelected, isSelecting, isSelectedAndDeselecting);
    const cardHoverAnimation = createCardHoverAnimation(isRun,isSelected);
    const cardHoverTitleUnderlineAnimation = createCardHoverUnderlineAnimation(isRun,isSelected);
    const cardHoverSvgAnimation = createCardHoverSvgAnimation(isRun, isSelected);
    return(
        css({
            position: 'absolute',
            top: 0,
            zIndex:3,
            left: isSelected ? DEVELOPMENT_CARD_CONSTANTS.WIDTH + DEVELOPMENT_CARD_CONSTANTS.GAP :  index * (DEVELOPMENT_CARD_CONSTANTS.WIDTH + DEVELOPMENT_CARD_CONSTANTS.GAP) ,
            width: DEVELOPMENT_CARD_CONSTANTS.WIDTH,
            opacity: isInit || isStart ? 0 : isSelected ? 1 : isOneSelected ? 0.2 : 1,
            height: DEVELOPMENT_CARD_CONSTANTS.HEIGHT,
            borderRadius: 10,
            color: isSelected ? colors.LIGHTORANGE : colors.DARKWHITE,
            transform: isSelected && !isSelectedAndDeselecting ? `translateY(${DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y}px)`: 'translateY(0)',
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
                    width: `calc(${DEVELOPMENT_CARD_CONSTANTS.WIDTH} - 30px)`,
                    background: colors.LIGHTORANGE,
                    animation: isStart ? `${ ServiceCardStartUnderlineAnimation} calc(${DEVELOPMENT_ANIMATION_TIMINGS.CARD_START_TIME}ms + ${index} * 0.2s ) ease-out .3s backwards`: '', 
                    height: 2,
                },
            },
        
            '.serviceCardContent':{
                marginTop: isSelected ? DEVELOPMENT_CARD_CONSTANTS.SELECTED_INNER_MARGIN_TOP : DEVELOPMENT_CARD_CONSTANTS.INNER_MARGIN_TOP,
                flex:'0 0 auto',
                fontFize: fontSizes.SMALL,
                height:100,
                flexDirection: 'column',
                textAlign: 'center',
                verticalAlign: 'middle',
                position: 'relative',
                marginLeft: 15,
                width: DEVELOPMENT_CARD_CONSTANTS.WIDTH - 30,
                overflowWrap: 'break-word',
                fill: colors.DARKWHITE,
                animation: cardContentAnimation,
                
                'svg':{
                        fill: colors.DARKWHITE,
                        height:80,
                       
                },
            },
        
            '&:hover': !isOneSelected && !isSelecting && {        
                cursor: isSelected && !isSelectedAndDeselecting ? '' :'pointer',
                animation: cardHoverAnimation,
                transform: isSelected ? `translateY(${DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y})`: 'translateY(-10px)'  ,
        
                '.serviceCardTitle':{
        
                    '.serviceCardTitleUnderline':{
                        bottom:0,
                        left:0,
                        width: DEVELOPMENT_CARD_CONSTANTS.WIDTH, 
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

const createCardAnimation = (index:number,isStart:boolean, isRun:boolean, isSelected:boolean, isSelecting:boolean,isOneSelected:boolean,isSelectedAndDeselecting:boolean,isOtherSelectedAndDeselecting:boolean) => {

    // if( isStart){
    //     //calc(${DEVELOPMENT_CARD_START_ANIMATION_DELAY} + ( ${index} * ${DEVELOPMENT_CARD_START_ANIMATION_DELAY_STEP}))
    //     return `${ServiceCardStartAnimation} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_START_TIME}ms ease-in-out calc(${DEVELOPMENT_ANIMATION_TIMINGS.CARD_START_BASEDELAY}ms + ${index} * ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_START_DELAYSTEP}ms) backwards`;
    // }

    if(isRun && isSelectedAndDeselecting){
        return `${createServiceCardDeselectAnimation(index)} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_TIME}ms linear ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_DELAY}ms backwards`;
    }
    if(isRun && isSelected && isSelecting){
        return `${createServiceCardSelectionAnimation(index)} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_TIME}ms linear backwards`;
    }
    if(isRun && isOtherSelectedAndDeselecting){
        return `${ServiceCardOtherServiceDeselectionAnimation} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_TIME}ms linear ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_DELAY}ms backwards`;
    }
    if(isRun && !isSelected && isOneSelected && isSelecting){
        return `${ServiceCardOtherServiceSelectionAnimation} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_TIME}ms linear backwards`;
    }
}

const createCardContentAnimation = (isRun:boolean,isSelected:boolean,isSelecting:boolean, isSelectedAndDeselecting:boolean)  => {
    if(isRun && !isSelected){
        return '';
    }
    if(isRun && isSelectedAndDeselecting){
        return `${ServiceCardContentDeselectionAnimation}  ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_TIME}ms linear ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_DELAY}ms backwards`;
    }

    if(isSelected && isSelecting){
        return `${ServiceCardContentSelectionAnimation} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_TIME}ms linear backwards`;
    }
    return '';
}

const createCardHoverAnimation =  (isRun:boolean,isSelected:boolean) => {
    if(isRun && !isSelected){
        return `${ServiceCardHoverAnimation} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_HOVER_TIME}ms ease-out  backwards`;
    }

    if(isSelected){
        return '';
    }
    return '';
}

const createCardHoverUnderlineAnimation =  (isRun:boolean,isSelected:boolean)  => {
    if(isRun && !isSelected){
        return `${ServiceCardTitleUnderlineHoverAnimation}  ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_HOVER_TIME}ms ease-out backwards`
    }

    if(isSelected){
        return ''
    };
    return '';
}

const createCardHoverSvgAnimation =  (isRun:boolean,isSelected:boolean)  => {
    if(isRun && !isSelected){
        return `${ServiceCardHoverIconAnimation} ${DEVELOPMENT_ANIMATION_TIMINGS.CARD_HOVER_TIME}ms ease-out backwards`
    }

    if(isSelected){
        return ''
    };
    return '';
}
