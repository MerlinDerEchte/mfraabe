import { css } from '@emotion/css';
import { ABOUT_CONTENT_CONSTANTS,  } from '../../AboutConstants';


export const createAboutContentStyles = () => {

    return(
        css({
            position: 'absolute',
            top:  ABOUT_CONTENT_CONSTANTS.TOP,
            width:ABOUT_CONTENT_CONSTANTS.WIDTH,
            height: ABOUT_CONTENT_CONSTANTS.HEIGHT,
            marginLeft: ABOUT_CONTENT_CONSTANTS.LEFT,
            overflowY: 'scroll',
            })
    )
}