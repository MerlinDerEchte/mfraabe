import {css, keyframes } from '@emotion/react';
import { colors } from '../../../constants/css/colors';
import {
    LETTER_INIT_ANIMATION_DELAY,
    INIT_SVG_ANIMATION_TIME,
    START_ANIMATION_TIME,
    LETTER_INIT_ANIMATION_TIME
     } from '../../../constants/timings';


const SPACE_LETTER_MID_MARGIN_RIGHT = '14px';
const SPACE_LETTER_LEFT_MARGIN_RIGHT = '5px';
export const createSloganLetterStyles =  (index:number,isInit:boolean,isStart:boolean,isSpace:boolean, isInitialPath: boolean) => {

    const letterAnimation =  createLetterAnimation(index,isInit,isStart,isSpace, isInitialPath);
    return css({
        color: colors.LIGHTORANGE,
        flex: '1 1 auto',
        marginRight: isSpace ? isInit && isInitialPath ? SPACE_LETTER_MID_MARGIN_RIGHT : SPACE_LETTER_LEFT_MARGIN_RIGHT : '0px',
        animation : letterAnimation,
    });
}

const createLetterAnimation = (index:number, isInit:boolean, isStart:boolean, isSpace:boolean, isInitialPath:boolean) => {
    if(isInit && isInitialPath){
        return `${LetterInitAnimation} ${LETTER_INIT_ANIMATION_TIME} calc(${INIT_SVG_ANIMATION_TIME} + ${LETTER_INIT_ANIMATION_DELAY} * ${index}) backwards`
    }
    if(isStart && isSpace){
        return `${spaceLetterStartAnimation} ${START_ANIMATION_TIME} ${LETTER_INIT_ANIMATION_DELAY} backwards`
    }
}

const LetterInitAnimation = keyframes`
    0%{
        opacity: 0 ;
    }
    100%{
        opacity: 1;
    }
`;

const spaceLetterStartAnimation = keyframes`
    from{
        margin-right: ${SPACE_LETTER_MID_MARGIN_RIGHT};
    }
    to{
        margin-right: ${SPACE_LETTER_LEFT_MARGIN_RIGHT};
    }
`;