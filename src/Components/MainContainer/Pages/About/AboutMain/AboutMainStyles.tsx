import { css } from "@emotion/react";
import { colors } from "../../../../../constants/css/colors";
import { sizes } from "../../../../../constants/css/sizes";
const ABOUT_MAIN_WIDTH = '700px';
const ABOUT_MAIN_HEIGHT = '80vh';
export const ABOUT_MAIN_MARGIN = '100px';
export const AboutMainStyles = css({
    position:'absolute',
    top: ABOUT_MAIN_MARGIN,
    left:`calc(50% - (${ABOUT_MAIN_WIDTH} / 2))`,
    width: ABOUT_MAIN_WIDTH,
    height:ABOUT_MAIN_HEIGHT,
});