import { css } from '@emotion/css';
import {colors } from '../../../constants/css/colors';
export const pageStyles = css`
    z-index: 1;
    position: relative;
    height:100%;
    width:100%;
    box-shadow: 0px -10px  10px -13px ${colors.DARKBLUE} inset;
    background: ${colors.DARKBLUE};
    overflow-y: auto;
    overflow-x:hidden ;
`;