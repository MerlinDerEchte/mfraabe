import { css } from "@emotion/react";
import { fontSizes } from "../../../../../constants/css/fontSizes";
import { colors } from "../../../../../constants/css/colors";

import { PAGE_MENU_CONSTANTS } from "../../../../../GlobalConstants";
import { DEVELOPMENT_CONTENT_CONSTANTS } from "../DevelopmentConstants";

export const createDevelopmentWrapperStyles = (screenWidth:number) => css({
    position: 'relative',
    marginTop: 0,
    marginLeft: Math.max(0,(screenWidth / 2) - PAGE_MENU_CONSTANTS.RUN_WIDTH - (DEVELOPMENT_CONTENT_CONSTANTS.WIDTH / 2)),
    zIndex: 1,
    width: DEVELOPMENT_CONTENT_CONSTANTS.WIDTH,
    height: `100%`,
    fontSize: `${fontSizes.SMALL}`,
    lineHeight: 1,
    color: `${colors.DARKWHITE}`,
});