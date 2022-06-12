import { css } from "@emotion/react"
import { colors } from "../../../../../../constants/css/colors"
import { fontSizes } from "../../../../../../constants/css/fontSizes"
import { WIZZARD_MENU_CONSTANTS } from "../../AboutConstants"

export const createWizzardItemStyles = ( index:number) => {

    return css({ 
        position: "absolute",
        left: WIZZARD_MENU_CONSTANTS.ITEM.BASE_LEFT + (WIZZARD_MENU_CONSTANTS.ITEM.WIDTH + WIZZARD_MENU_CONSTANTS.ITEM.GAP) * index,
        height: WIZZARD_MENU_CONSTANTS.ITEM.HEIGHT,
        width: WIZZARD_MENU_CONSTANTS.ITEM.WIDTH,
        top: WIZZARD_MENU_CONSTANTS.ITEM.TOP,
        color: colors.DARKWHITE,
        fontSize: fontSizes.BIG,
        background: colors.DARKBLUE,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        lineHeight: fontSizes.NORMAL,
        cursor: 'pointer',
        borderBottom:`2px solid ${colors.LIGHTORANGE}`,
    })

}