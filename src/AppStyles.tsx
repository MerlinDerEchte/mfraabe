import { css, cx } from '@emotion/css';
import { colors } from './constants/css/colors'

export const appStyles = css({

    zIndex: -10,
    textAlign: 'center',
    background: `${colors.DARKBLUE}`,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    'a':{
        textDecoration: 'none',

    }
 })