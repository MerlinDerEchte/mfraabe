import { css } from "@emotion/css";
import { getLeftMarginInsidePage } from "../../PageUtils";
import { ABOUT_CONTAINER_CONSTANTS, ABOUT_CONTENT_CONSTANTS } from "./AboutConstants";

export interface IcreateAboutMainStyles {
    isInit:boolean,
    isStart:boolean,
    screenWidth:number
}
export const createAboutMainStyles = (params:IcreateAboutMainStyles) => {
    const { isInit, isStart, screenWidth } = params;
   
    const leftMarginInsidePage =  getLeftMarginInsidePage({
        screenWidth: screenWidth,
        objectWidth: ABOUT_CONTAINER_CONSTANTS.WIDTH
    })
    return(
        css({
            position:'relative',
            marginTop: 0,
            opacity: isStart || isInit ? 0 : 1,
            marginLeft:  leftMarginInsidePage,
            width: ABOUT_CONTAINER_CONSTANTS.WIDTH,
            height: '100%',
            lineHeight: 1,
        })  
    )
};