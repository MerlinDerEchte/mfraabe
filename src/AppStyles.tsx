import { css, cx } from '@emotion/css';
import { colors } from './constants/css/colors'

export const appStyles = css({

    zIndex: -10,
    textAlign: 'center',
    background: `${colors.DARKBLUE}`,
    height: '100vh',
    width: '100vw',
    scrollbarWidth: 'thin',
    scrollbarColor: colors.DARKWHITE,
    '*::-webkit-scrollbar':{
        width: 8,
    },
    '*::-webkit-scrollbar-track': {
        background: colors.DARKBLUE,
    },
    '*::-webkit-scrollbar-thumb': {
        background: colors.LIGHTORANGE,
        borderRadius: 20,
        border: `2px solid ${colors.DARKBLUE}`,
    },
    
    'a':{
        textDecoration: 'none',
    }
    
 })