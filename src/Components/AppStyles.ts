import { css } from '@emotion/css';
import { colors } from '../constants/css/colors'

export const appStyles = css({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -10,
    textAlign: 'center',
    background: `${colors.DARKBLUE}`,
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