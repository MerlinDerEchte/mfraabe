import { css } from "@emotion/react";
import { fontSizes } from "../../../../../../constants/css/fontSizes";
import { colors } from "../../../../../../constants/css/colors";


import { DEVELOPMENT_CONTENT_CONSTANTS } from "./DevelopmentConstants";
import { getLeftMarginInsidePage } from "../../../PageUtils";

export const createDevelopmentWrapperStyles = (screenWidth:number) =>{
    
    const leftMarginInsidePage = getLeftMarginInsidePage({
        screenWidth: screenWidth,
        objectWidth:  DEVELOPMENT_CONTENT_CONSTANTS.WIDTH
    })
    return(
        css({
            position: 'relative',
            marginTop: 0,
            marginLeft: leftMarginInsidePage,
            zIndex: 1,
            width: DEVELOPMENT_CONTENT_CONSTANTS.WIDTH,
            height: `100%`,
            fontSize: `${fontSizes.SMALL}`,
            color: `${colors.DARKWHITE}`,
        })
    )
};