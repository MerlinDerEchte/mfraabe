import { css } from "@emotion/css";
import { colors } from "../../../../../../../../constants/css/colors";
import { ABOUT_CARD_CONSTANTS } from "../../../AboutConstants";


export const createAboutCardStyles = () => {

    return css({
        position: 'absolute',
        lineHeight: 1.5,
        width: ABOUT_CARD_CONSTANTS.WIDTH,
        height: ABOUT_CARD_CONSTANTS.HEIGHT,
        left: ABOUT_CARD_CONSTANTS.LEFT,
        top: ABOUT_CARD_CONSTANTS.TOP,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 50,
    })
}
export const createAboutCardPhotoWrapperStyles= () => {
    return(css({
        flex: '0 0 auto',
        width: ABOUT_CARD_CONSTANTS.ABOUT_PHOTO_WRAPPER.WIDTH,
        height: ABOUT_CARD_CONSTANTS.ABOUT_PHOTO_WRAPPER.HEIGHT
    }))
}

export const createAboutCardTextWrapperStyles = () => {
    return(
        css({
            flex: '0 0 auto',
            width: ABOUT_CARD_CONSTANTS.ABOUT_PHOTO_WRAPPER.WIDTH,
            height: 200,
        })
    )
}