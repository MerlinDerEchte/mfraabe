import { css } from "@emotion/react";
import { fontSizes } from "../../../../../../constants/css/fontSizes";
import { colors } from "../../../../../../constants/css/colors";

const SERVICES_WRAPPER_TOP = '250px';
const SERVICES_WRAPPER_MARGIN_BOTTOM = '100px';
const SERVICES_WRAPPER_WIDTH = '700px';

export const ServiceCardWrapperStyles =  css({
    position: 'relative',
    marginTop:SERVICES_WRAPPER_TOP,
    marginLeft: `calc((100% - ${SERVICES_WRAPPER_WIDTH}) / 2)`,
    zIndex: 1,
    display:'block',
    width: 700,
    height: `calc(100vh - ${SERVICES_WRAPPER_TOP} - ${SERVICES_WRAPPER_MARGIN_BOTTOM})`,
    fontSize: `${fontSizes.SMALL}`,
    lineHeight: 1,
    color: `${colors.DARKWHITE}`,
});