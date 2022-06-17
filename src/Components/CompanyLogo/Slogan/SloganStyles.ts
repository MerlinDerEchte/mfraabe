import { css, keyframes } from '@emotion/css';
import { fontSizes } from '../../../constants/css/fontSizes';
import { ANIMATION_TIMINGS } from '../../GlobalConstants';
import { COMPANY_LOGO_CONSTANTS } from '../CompanyLogoConstants';


export interface IcreateCompanySloganStyles {
    isInit:boolean,
    isStart: boolean,
    isInitialPath: boolean,
    sloganInitTotalHeight:number,
    sloganRunTotalHeight: number,
}

export const createCompanySloganStyles = (params:IcreateCompanySloganStyles) => {

    const { isInit, isStart, isInitialPath, sloganInitTotalHeight, sloganRunTotalHeight} = params;

    return(
        css({
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
        })
    )      
};
interface IcreateSloganStartAnimation {
    sloganInitTotalHeight:number,
    sloganRunTotalHeight:number
}

function createSloganStartAnimation(animationParams:IcreateSloganStartAnimation){
    return(keyframes`
            from{
                height:${animationParams.sloganInitTotalHeight}px;
                width: ${COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_WIDTH}px;
                font-size: ${fontSizes.HUGE};
                }
            to{
                height: ${animationParams.sloganRunTotalHeight}px;
                width: ${COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_WIDTH}px;
                font-size: ${fontSizes.NORMAL};
            }`
    )
}