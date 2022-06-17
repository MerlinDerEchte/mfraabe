import { css, keyframes } from '@emotion/css';
import { fontSizes } from '../../../../constants/css/fontSizes';
import { ANIMATION_TIMINGS } from '../../../GlobalConstants';

export interface IcreateSloganRowStyles {
    isInit: boolean,
    isStart: boolean,
    isInitialPath: boolean,

}
export const createSloganRowStyles = (params:IcreateSloganRowStyles) => {
    const { isInit, isStart, isInitialPath } = params;
    return(
        css({
            flex: '1 1',
            display: 'flex',
            flexDirection: 'row',
            height: isInit && isInitialPath ? `${fontSizes.HUGE}` : `${fontSizes.NORMAL}`,
            alignItems:'center',
            justifyContent: 'center',
            animation: isStart ? `${SloganRowStartAnimation}  ${ANIMATION_TIMINGS.START_TIME}ms ease-out backwards`: '',
        })
    )
}

const SloganRowStartAnimation = keyframes`
    from{
        height:${fontSizes.HUGE};
    }
    to{
        height: ${fontSizes.NORMAL};
    }
`