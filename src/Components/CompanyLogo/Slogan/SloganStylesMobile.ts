import { css, keyframes } from '@emotion/css';
import { fontSizes } from '../../../constants/css/fontSizes';
import { MOBILE_ANIMATION_TIMINGS } from '../../../GlobalConstantsMobile';
import { MOBILE_COMPANY_LOGO_CONSTANTS } from '../CompanyLogoConstantsMobile';


export interface IcreateMobileCompanySloganStyles {
    isInit:boolean,
    isStart: boolean,
    isInitialPath: boolean,
    mobileSloganInitTotalHeight:number,
    mobileSloganRunTotalHeight: number,
}

export const createMobileCompanySloganStyles = (params:IcreateMobileCompanySloganStyles) => {

    const { isInit, isStart, isInitialPath, mobileSloganInitTotalHeight, mobileSloganRunTotalHeight} = params;

    return(
        css({
            flex:'0 0 auto',
            //marginTop: isInit && isInitialPath ? SLOGAN_MID_MARGIN_TOP : SLOGAN_LEFT_MARGIN_TOP,
            height: isInit && isInitialPath ? mobileSloganInitTotalHeight : mobileSloganRunTotalHeight ,
            width: isInit && isInitialPath ? MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_WIDTH : MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_WIDTH,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap:  isInit && isInitialPath ? MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_GAP : MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_GAP,
            alignItems: 'center',
            fontSize: isInit && isInitialPath ? fontSizes.BIG : fontSizes.NORMAL,
            animation: isStart ? `${createSloganStartAnimation({mobileSloganInitTotalHeight, mobileSloganRunTotalHeight})}  ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
        })
    )      
};
interface IcreateSloganStartAnimation {
    mobileSloganInitTotalHeight:number,
    mobileSloganRunTotalHeight:number
}

function createSloganStartAnimation(animationParams:IcreateSloganStartAnimation){
    return(keyframes`
            from{
                height:${animationParams.mobileSloganInitTotalHeight}px;
                width: ${MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_WIDTH}px;
                font-size: ${fontSizes.HUGE};
                }
            to{
                height: ${animationParams.mobileSloganRunTotalHeight}px;
                width: ${MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_WIDTH}px;
                font-size: ${fontSizes.NORMAL};
            }`
    )
}