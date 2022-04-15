import { css } from '@emotion/css';
import { sizes } from '../../constants/css/sizes';


export const mainContainerStyles = css`
    z-index:1;
    display: block;
    position: absolute;
    top:0;
    left: ${sizes.MENU_WIDTH};
    width: calc(100vw - ( 2 * ${sizes.MENU_WIDTH}));
    height: 100vh;
    `;