import { css } from '@emotion/css';
import {colors } from '../../../constants/css/colors';
import { MOBILE_PAGE_CONSTANTS } from './PageConstantsMobile';
interface IcreatePageStyles {
    isInit:boolean, 
    isStart:boolean,
    isRun:boolean,
    screenWidth:number,
    screenHeight:number
}

export const createMobilePageStyles = (params: IcreatePageStyles) => {
    const {isInit, isStart, isRun, screenWidth, screenHeight } = params;
    return css({
        zIndex: 1,
        opacity: isRun ? 1 : 0,
        position: 'relative',
        height: screenHeight - MOBILE_PAGE_CONSTANTS.MARGIN_TOP - MOBILE_PAGE_CONSTANTS.MARGIN_BOTTOM,
        width: screenWidth - MOBILE_PAGE_CONSTANTS.MARGIN_LEFT - MOBILE_PAGE_CONSTANTS.MARGIN_RIGHT,
        marginTop: MOBILE_PAGE_CONSTANTS.MARGIN_TOP,
        marginLeft: MOBILE_PAGE_CONSTANTS.MARGIN_LEFT,
        marginBottom: 0,
        overflowX: 'hidden',
        overflowY: 'scroll',
        background: colors.DARKBLUE,
    });
}