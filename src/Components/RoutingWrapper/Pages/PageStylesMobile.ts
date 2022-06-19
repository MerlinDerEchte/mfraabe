import { css } from '@emotion/css';
import {colors } from '../../../constants/css/colors';
import { MOBILE_PAGE_CONSTANTS } from './PageConstantsMobile';
export const pageStyles = css({
    zIndex: 1,
    position: 'relative',
    height: '100%',
    width: '100%',
    marginTop: MOBILE_PAGE_CONSTANTS.MARGIN_TOP,
    marginBottom: 0,
    overflow: 'hidden',
    background: colors.DARKBLUE,
});