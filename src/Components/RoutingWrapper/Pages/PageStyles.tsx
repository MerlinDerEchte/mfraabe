import { css } from '@emotion/css';
import {colors } from '../../../constants/css/colors';
import { PAGE_MENU_CONSTANTS } from '../../GlobalConstants';
import { PAGE_CONSTANTS } from './PageConstants';
export const pageStyles = css({
    zIndex: 1,
    position: 'relative',
    height: '100%',
    width: '100%',
    marginTop: PAGE_CONSTANTS.MARGIN_TOP,
    marginLeft: PAGE_MENU_CONSTANTS.RUN_WIDTH,
    boxShadow: `0px -10px  10px -13px ${colors.DARKBLUE} inset`,
    background: colors.DARKBLUE,
});