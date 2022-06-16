import { PAGE_MENU_CONSTANTS } from "../../../GlobalConstants";
import { ABOUT_CONTENT_CONSTANTS } from "./About/AboutDesktop/AboutConstants";

export interface IgetLeftMarginInsidePage {
    objectWidth: number,
    screenWidth: number,
}

export const getLeftMarginInsidePage = (params:IgetLeftMarginInsidePage) => {
    const {screenWidth, objectWidth } = params;
    return(
        ((screenWidth - PAGE_MENU_CONSTANTS.RUN_WIDTH) - objectWidth) / 2
    )
}