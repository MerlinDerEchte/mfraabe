import { css } from "@emotion/css"
import { colors } from "../../../../../../constants/css/colors"
import { fontSizes } from "../../../../../../constants/css/fontSizes"

export const createAboutCardInfoStyles = () => {

    return(css({
        marginTop: 20,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flexStart',
        alignItems: 'flexStart',
        color: colors.DARKWHITE,
        fontSize: fontSizes.NORMAL
    }))
}
