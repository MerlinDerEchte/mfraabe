import {css, keyframes } from '@emotion/css';
import { colors } from '../../../../constants/css/colors';
import { ANIMATION_TIMINGS } from '../../../GlobalConstants';
import { MOBILE_ANIMATION_TIMINGS } from '../../../GlobalConstantsMobile';
import { COMPANY_LOGO_CONSTANTS } from '../../CompanyLogoConstants';

export interface IcreateMobileSloganLetterStyles {
    index:number,
    isInit:boolean,
    isStart:boolean,
    isSpace:boolean,
    isInitialPath: boolean
}

export const createMobileSloganLetterStyles =  (animationParams:IcreateMobileSloganLetterStyles) => {
    const { index, isInit, isStart, isSpace, isInitialPath } = animationParams;
    const letterAnimation =  createMobileLetterAnimation({index,isInit,isStart,isSpace, isInitialPath});
    return css({
        color: colors.LIGHTORANGE,
        flex: '1 1 auto',
        marginRight: isSpace ? isInit && isInitialPath ? COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.INIT_MARGIN_RIGHT : COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.RUN_MARGIN_RIGHT : '0px',
        animation : letterAnimation,
    });
}

export interface IcreateMobileLetterAnimation {
    index:number, 
    isInit:boolean,
    isStart:boolean,
    isSpace:boolean,
    isInitialPath:boolean
}
const createMobileLetterAnimation = (animationParams:IcreateMobileLetterAnimation) => {
    const { index, isInit, isStart, isSpace, isInitialPath } = animationParams;
    if(isInit && isInitialPath){
        return `${mobileLetterInitAnimation} ${MOBILE_ANIMATION_TIMINGS.INIT_LETTER_TIME}ms calc(${MOBILE_ANIMATION_TIMINGS.INIT_LOGO_TIME}ms + ${index} * ${ANIMATION_TIMINGS.INIT_LETTER_DELAY}ms ) backwards`;
    }
    if(isStart && isSpace){
        return `${mobileSpaceLetterStartAnimation} ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms ${MOBILE_ANIMATION_TIMINGS.INIT_LETTER_DELAY}ms backwards`
    }
}

const mobileLetterInitAnimation = keyframes`
    0%{
        opacity: 0 ;
    }
    100%{
        opacity: 1;
    }
`;

const mobileSpaceLetterStartAnimation = keyframes`
    from{
        margin-right: ${COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.INIT_MARGIN_RIGHT}px;
    }
    to{
        margin-right: ${COMPANY_LOGO_CONSTANTS.SLOGAN.LETTER.RUN_MARGIN_RIGHT}px;
    }
`;