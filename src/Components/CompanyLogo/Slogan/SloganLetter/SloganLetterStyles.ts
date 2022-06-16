import {css, keyframes } from '@emotion/css';
import { colors } from '../../../../constants/css/colors';
import { ANIMATION_TIMINGS } from '../../../../GlobalConstants';
import { COMPANY_LOGO_CONSTANTS } from '../../CompanyLogoConstants';

export interface IcreateSloganLetterStyles {
    index:number,
    isInit:boolean,
    isStart:boolean,
    isSpace:boolean,
    isInitialPath: boolean
}

export const createSloganLetterStyles =  (animationParams:IcreateSloganLetterStyles) => {
    const { index, isInit, isStart, isSpace, isInitialPath } = animationParams;
    const letterAnimation =  createLetterAnimation({index,isInit,isStart,isSpace, isInitialPath});
    return css({
        color: colors.LIGHTORANGE,
        flex: '1 1 auto',
        marginRight: isSpace ? isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.INIT_MARGIN_RIGHT : COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.RUN_MARGIN_RIGHT : '0px',
        animation : letterAnimation,
    });
}

export interface IcreateLetterAnimation {
    index:number, 
    isInit:boolean,
    isStart:boolean,
    isSpace:boolean,
    isInitialPath:boolean
}
const createLetterAnimation = (animationParams:IcreateLetterAnimation) => {
    const { index, isInit, isStart, isSpace, isInitialPath } = animationParams;
    if(isInit && isInitialPath){
        return `${LetterInitAnimation} ${ANIMATION_TIMINGS.INIT_LETTER_TIME}ms calc(${ANIMATION_TIMINGS.INIT_LOGO_TIME}ms + ${index} * ${ANIMATION_TIMINGS.INIT_LETTER_DELAY}ms ) backwards`;
    }
    if(isStart && isSpace){
        return `${spaceLetterStartAnimation} ${ANIMATION_TIMINGS.START_TIME}ms ${ANIMATION_TIMINGS.INIT_LETTER_DELAY}ms backwards`
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
        margin-right: ${COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.INIT_MARGIN_RIGHT}px;
    }
    to{
        margin-right: ${COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.RUN_MARGIN_RIGHT}px;
    }
`;