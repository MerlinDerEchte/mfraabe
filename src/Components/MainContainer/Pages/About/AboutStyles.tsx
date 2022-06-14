import { css } from "@emotion/react";
const ABOUT_MAIN_WIDTH = 700;
export const ABOUT_MAIN_MARGIN = '100px';
export const createAboutMainStyles = (isInit:boolean, isStart:boolean, screenWidth:number, screenHeight:number) => css({
    position:'relative',
    marginTop: ABOUT_MAIN_MARGIN,
    opacity: isStart || isInit ? 0 : 1,
    marginLeft: (screenWidth - 300 - ABOUT_MAIN_WIDTH) / 2 ,
    width: ABOUT_MAIN_WIDTH,
    height: screenHeight- 100 - 100,
    lineHeight: 1,
});