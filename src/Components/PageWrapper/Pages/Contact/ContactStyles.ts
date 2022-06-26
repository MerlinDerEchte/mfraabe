import { css } from "@emotion/css";
import { PAGE_MENU_CONSTANTS } from "../../../GlobalConstants";
import { PAGE_CONSTANTS } from "../PageConstants";
import { CONTACT_CONTENT_CONSTANTS } from "./ContactConstants";

export interface IcreateContactStyles {
    isInit:boolean, 
    isStart:boolean,
    screenWidth:number,
    screenHeight:number
}
export const createContactStyles = (params:IcreateContactStyles) => {
    const { isInit, isStart, screenWidth, screenHeight} = params;
    return(
        css({
            opacity: isInit || isStart ? 0 : 1,
            position:'absolute',
            top: 0,
            left: 0,
            marginTop: CONTACT_CONTENT_CONSTANTS.MARGIN_TOP,
            width: screenWidth - PAGE_MENU_CONSTANTS.RUN_WIDTH,
            height: screenHeight - PAGE_CONSTANTS.MARGIN_TOP,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            lineHeight: 1,
            marginLeft: 0, 
        })
    )
};