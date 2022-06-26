import { css } from "@emotion/css";
import { PAGE_MENU_CONSTANTS } from "../../../GlobalConstants";
import { PAGE_CONSTANTS } from "../PageConstants";

export interface IcreateMobileContactStyles {
    isInit:boolean, 
    isStart:boolean,
    screenWidth:number,
    screenHeight:number
}

export const createMobileContactStyles = (params:IcreateMobileContactStyles) => {
    const { isInit, isStart, screenWidth, screenHeight } = params; 
    return(
        css({
            opacity: isInit || isStart ? 0 : 1,
            position:'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height:'100%',
            lineHeight: 1,
            marginLeft: 0, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        })
    )
}