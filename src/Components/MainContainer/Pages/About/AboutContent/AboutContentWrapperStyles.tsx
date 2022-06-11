import { css } from '@emotion/css';
import { ABOUT_CONTENT_CONSTANTS, WIZZARD_CONSTANTS } from '../AboutConstants';
import { colors } from '../../../../../constants/css/colors';

export const createAboutContentStyles = () => {

    return(
        css({
            width:ABOUT_CONTENT_CONSTANTS.WIDTH,
            height: `calc(100vh - ${ABOUT_CONTENT_CONSTANTS.HEIGHT}px )`,
            marginLeft: ABOUT_CONTENT_CONSTANTS.LEFT,
            })
    )
}