import {css} from '@emotion/react';
import { colors } from '../../../constants/css/colors';
import { fontSizes } from '../../../constants/css/fontSizes';

export const callToActionButtonStyles = css({
    position:'relative',
    fontSize:fontSizes.SMALL,
    background: colors.DARKWHITE,
    color: colors.DARKBLUE,
    padding: '10px 20px 10px 20px',
    borderRadius: 3,
    border: 'none',
    cursor: 'pointer',
    boxShadow: `2px 2px 5px -2px  ${colors.LIGHTORANGE }`,

    '&:hover':{
        boxShadow:  `0px 0px 8px 1px  ${colors.LIGHTORANGE }`,
      
    }   
})
