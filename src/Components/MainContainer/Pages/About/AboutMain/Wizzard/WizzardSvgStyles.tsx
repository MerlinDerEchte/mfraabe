import { css } from "@emotion/css";


const WIZZARD_DISTANCE_TOP = '100px';
const WIZZARD_DISTANCE_RIGHT = '50px';
export const WIZZARD_VIEWBOX_MARGIN_LEFT = 100;
export const WIZZARD_VIEWBOX_MARGIN_TOP = 125;
export const WIZZARD_VIEWBOX_WIDTH = 150;
export const WIZZARD_VIEWBOX_HEIGHT = 225;


export const WizzardSvgStyles = css({
    position: 'absolute',
    width: '150px',
    height: '200px',
    right: WIZZARD_DISTANCE_RIGHT,
    top: WIZZARD_DISTANCE_TOP,
})