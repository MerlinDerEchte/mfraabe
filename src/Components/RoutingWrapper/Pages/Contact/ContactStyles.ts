import { css } from "@emotion/css";
import { PAGE_MENU_CONSTANTS } from "../../../../GlobalConstants";
import { PAGE_CONSTANTS } from "../PageConstants";
export const CONTACT_MAIN_MARGIN = '100px';
export const createContactStyles = (isInit:boolean, isStart:boolean, screenWidth:number, screenHeight:number) => css({
    opacity: isInit || isStart ? 0 : 1,
    position:'absolute',
    top: 0,
    left: 0,
    width: screenWidth - PAGE_MENU_CONSTANTS.RUN_WIDTH,
    height: screenHeight - PAGE_CONSTANTS.MARGIN_TOP,
    lineHeight: 1,
    marginLeft: 0, 
});