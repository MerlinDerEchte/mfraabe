import { css, keyframes } from '@emotion/css';
import { fontSizes } from '../../../../constants/css/fontSizes';
import { MOBILE_ANIMATION_TIMINGS } from '../../../../GlobalConstantsMobile';

export interface IcreateMobileSloganRowStyles {
    isInit: boolean,
    isStart: boolean,
    isInitialPath: boolean,
}
export const createMobileSloganRowStyles = (params:IcreateMobileSloganRowStyles) => {
    const { isInit, isStart, isInitialPath } = params;
    return(
        css({
            flex: '1 1',
            display: 'flex',
            flexDirection: 'row',
            height: isInit && isInitialPath ? `${fontSizes.HUGE}` : `${fontSizes.NORMAL}`,
            alignItems:'center',
            justifyContent: 'center',
            animation: isStart ? `${MobileSloganRowStartAnimation}  ${MOBILE_ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
        })
    )
}

const MobileSloganRowStartAnimation = keyframes`
    from{
        height:${fontSizes.HUGE};
    }
    to{
        height: ${fontSizes.NORMAL};
    }
`