import { css } from "@emotion/react"
import { colors } from "../../../../../../constants/css/colors"
import { fontSizes } from "../../../../../../constants/css/fontSizes"
import { ABOUT_MENU_CONSTANTS } from "../../AboutConstants"

export const createWizzardItemStyles = ( index:number) => {

    return css({ 
        position: "absolute",
        left: ABOUT_MENU_CONSTANTS.ITEM.BASE_LEFT + (ABOUT_MENU_CONSTANTS.ITEM.WIDTH + ABOUT_MENU_CONSTANTS.ITEM.GAP) * index,
        height: ABOUT_MENU_CONSTANTS.ITEM.HEIGHT,
        width: ABOUT_MENU_CONSTANTS.ITEM.WIDTH,
        top: ABOUT_MENU_CONSTANTS.ITEM.TOP,
        color: colors.DARKWHITE,
        fontSize: fontSizes.NORMAL,
        
        background: colors.DARKBLUE,
        cursor: 'pointer',
        boxSizing: 'content-box',
        borderBottom:`2px solid ${colors.LIGHTORANGE}`,
        
        'p':{
            fontSize: fontSizes.BIG,
        }
       
    })

}