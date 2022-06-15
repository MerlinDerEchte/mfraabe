import { css } from "@emotion/react";
import { PAGE_MENU_CONSTANTS } from "../../../../GlobalConstants";
import { ABOUT_CONTENT_CONSTANTS } from "./AboutConstants";

export interface IcreateAboutMainStyles {
    isInit:boolean,
    isStart:boolean,
    screenWidth:number
}
export const createAboutMainStyles = (params:IcreateAboutMainStyles) => {
    const { isInit, isStart, screenWidth } = params;
    return(
        css({
            position:'relative',
            marginTop: 0,
            opacity: isStart || isInit ? 0 : 1,
            marginLeft: (screenWidth - PAGE_MENU_CONSTANTS.RUN_WIDTH) / 2 - ABOUT_CONTENT_CONSTANTS.WIDTH,
            width: ABOUT_CONTENT_CONSTANTS.WIDTH,
            height: '100%',
            lineHeight: 1,
        })  
    )
};