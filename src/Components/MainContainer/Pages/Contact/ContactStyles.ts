import { css } from "@emotion/css";
const CONTACT_MAIN_WIDTH = '700px';
const CONTACT_MAIN_HEIGHT = '80vh';
export const CONTACT_MAIN_MARGIN = '100px';
export const contactStyles = css({
    position:'absolute',
    top: CONTACT_MAIN_MARGIN,
    left:`calc(50% - (${CONTACT_MAIN_WIDTH} / 2))`,
    width: CONTACT_MAIN_WIDTH,
    height:CONTACT_MAIN_HEIGHT,
    lineHeight: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});