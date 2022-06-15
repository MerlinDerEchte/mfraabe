import { css } from "@emotion/css";
import { colors } from "../../../../../../../constants/css/colors";
import { ABOUT_CARD_CONSTANTS } from "../../../AboutConstants";


export const createAboutCardStyles = () => {

    return css({
        position: 'absolute',
        width: ABOUT_CARD_CONSTANTS.WIDTH,
        height: ABOUT_CARD_CONSTANTS.HEIGHT,
        left: ABOUT_CARD_CONSTANTS.LEFT,
        top: ABOUT_CARD_CONSTANTS.TOP,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    })
}
export const createAboutCardPhotoWrapperStyles= () => {
    return(css({
        flex: '0 0 auto',
        width: ABOUT_CARD_CONSTANTS.ABOUT_PHOTO_WRAPPER.WIDTH,
        height: ABOUT_CARD_CONSTANTS.ABOUT_PHOTO_WRAPPER.HEIGHT
    }))
}