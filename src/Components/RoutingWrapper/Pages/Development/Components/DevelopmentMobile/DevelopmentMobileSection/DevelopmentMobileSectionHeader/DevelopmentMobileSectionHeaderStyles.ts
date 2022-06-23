import { css } from "@emotion/css";
import { colors } from "../../../../../../../../constants/css/colors";
import { fontSizes } from "../../../../../../../../constants/css/fontSizes";
import { MOBILE_DEVELOPMENT_CARD_CONSTANTS, MOBILE_DEVELOPMENT_SECTION_CONSTANTS } from "../../../DevelopmentConstantsMobile";

export const developmentHeaderStyles = css({
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: ' 0 0 auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: MOBILE_DEVELOPMENT_SECTION_CONSTANTS.GAP,
    'h1':{
        fontSize: fontSizes.NORMAL,
        width: MOBILE_DEVELOPMENT_SECTION_CONSTANTS.HEADER.TEXT_WIDTH,
        flex: 1,
        marginTop: 5,
        marginBottom:0,
    },
    '.svgWrapper': {
        flex: 1,
        width: '100%',
        height: '100%',
        stroke: colors.DARKWHITE,
        fill: colors.DARKWHITE,
        justifyContent: 'center',
        'svg':{ 
            height: MOBILE_DEVELOPMENT_SECTION_CONSTANTS.HEADER.SVG_HEIGHT

        }
    }
})