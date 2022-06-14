import { css } from "@emotion/react";
import { fontSizes } from "../../../../../../constants/css/fontSizes";
import { colors } from "../../../../../../constants/css/colors";

const DEVELOPMENT_WRAPPER_TOP = 100;
const DEVELOPMENT_WRAPPER_MARGIN_BOTTOM = 100;
const DEVELOPMENT_WRAPPER_WIDTH = 700;

export const DevelopmentWrapperStyles =  css({
    position: 'relative',
    marginTop: DEVELOPMENT_WRAPPER_TOP,
    marginLeft: `calc((100% - ${DEVELOPMENT_WRAPPER_WIDTH}px) / 2)`,
    zIndex: 1,
    display:'block',
    width: 700,
    height: `calc(100vh - ${DEVELOPMENT_WRAPPER_TOP}px - ${DEVELOPMENT_WRAPPER_MARGIN_BOTTOM}px)`,
    fontSize: `${fontSizes.SMALL}`,
    lineHeight: 1,
    color: `${colors.DARKWHITE}`,
});