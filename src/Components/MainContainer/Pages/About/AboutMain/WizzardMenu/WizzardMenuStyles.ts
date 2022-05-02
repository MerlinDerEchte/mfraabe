import { css } from "@emotion/react";
import { colors } from "../../../../../../constants/css/colors";

const MENU_WIDHT = '700px';
const MENU_HEIGHT = '200px';
export const WizzardMenuStyles = css({
    position: 'relative',
    width: MENU_WIDHT,
    marginLeft:'auto',
    marginRight:'auto',
    height: MENU_HEIGHT,
    borderBottom: `1px solid ${colors.LIGHTORANGE}`
})