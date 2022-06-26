import {css,keyframes } from '@emotion/css';
import { colors } from '../../../../../../../constants/css/colors';
import { ABOUT_ANIMATION_CONSTANTS, ABOUT_CANCEL_CONSTANTS } from '../../AboutConstants';

export interface IcreateAboutCancelStyles {
    isOneSelected:boolean,
    isSelecting:boolean,
    isDeselecting:boolean
} 
export const createAboutCancelStyles = (params:IcreateAboutCancelStyles) => {
    const { isOneSelected, isSelecting, isDeselecting } = params; 
    const aboutCancelAnimation = createAboutCancelAnimation({isSelecting, isDeselecting});

    return css({
        animation: aboutCancelAnimation,
        position:'absolute',
        opacity: isOneSelected ? 1 : 0,
        right:  0,
        top: 0,
        zIndex: 15,
        width: ABOUT_CANCEL_CONSTANTS.WIDTH,
        height: ABOUT_CANCEL_CONSTANTS.HEIGHT,
        
        '.xBackground':{
            position:'absolute',
            content: `''`,
            width: '100%',
            height: ABOUT_CANCEL_CONSTANTS.LINE_HEIGHT,
            borderRadius: 6,
            zIndex: 16,
            top: '50%',
            left: '0',
            transform: `rotateZ(45deg)`,
            background: colors.DARKBLUE,
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`
        },
        '.xForeground':{
            position:'absolute',
            zIndex: 16,
            content: `''`,
            width:'100%',
            height: ABOUT_CANCEL_CONSTANTS.LINE_HEIGHT,
            borderRadius: 6,
            top: '50%',
            left: '0',
            transform: `rotateZ(-45deg)`,
            background: colors.DARKBLUE,
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`,

            '::before':{
                content: `''`,
                background: colors.DARKBLUE,
                position: 'absolute',
                top: -6,
                left: `calc((100% - 4px) / 2)`,
                width: '4px',
                height: '16px',
            }
        },
        '&:hover':{
            cursor:'pointer',
           
            '.xForeground':{
                boxShadow: `0px 0px 3px 1px ${colors.DARKWHITE}`,
                background: colors.DARKWHITE,
                animation: `${cancelXHoverAnimation} ${ABOUT_ANIMATION_CONSTANTS.CANCEL_HOVER_ANIMATION_DELAY}ms ease-in-out 0s backwards`,
                '::before': {
                    background: colors.DARKWHITE,
                    animation: `${cancelXHoverBeforeAnimation} ${ABOUT_ANIMATION_CONSTANTS.CANCEL_HOVER_ANIMATION_DELAY}ms ease-in-out 0s backwards`,
                }
               
            },
            '.xBackground':{
                boxShadow: `0px 0px 3px 1px ${colors.DARKWHITE}`,
                background: colors.DARKWHITE,
                animation: `${cancelXHoverAnimation} ${ABOUT_ANIMATION_CONSTANTS.CANCEL_HOVER_ANIMATION_DELAY}ms ease-in-out 0s backwards`,
            }
        }
    });
}
interface IcreateAboutCancelAnimation {
    isSelecting:boolean,
    isDeselecting:boolean
}
const createAboutCancelAnimation = (params:IcreateAboutCancelAnimation) => {
    const { isSelecting, isDeselecting } = params;
    if(isDeselecting){
        return `${aboutCancelDeselectAnimation} ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms ease-in-out backwards`;
    }
    if(isSelecting){
        return `${aboutCancelSelectAnimtatino} ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT}ms ease-in-out 0s backwards`
    };
    return '';
}

const aboutCancelSelectAnimtatino = keyframes`
    from{
        opacity:0;
      
        right: 0px;
    }   
    to{
        opactiy:1;
       
        right: 0px;
    }
`;
const aboutCancelDeselectAnimation = keyframes`
    from{
        opactiy:1;
     
        right: 0px;
    }   
    to{
        opacity:0;
      
        right: 0px;
    }
`;

const cancelXHoverAnimation = keyframes`
    from{
        boxShadow: 0px 0px 3px 1px ${colors.LIGHTORANGE};
        background: ${colors.DARKBLUE};
    }
    to{
        boxShadow: 0px 0px 3px 1px ${colors.DARKWHITE};
        background: ${colors.DARKWHITE};
    }
`
const cancelXHoverBeforeAnimation = keyframes`
    from{
        background: ${colors.DARKBLUE};
    }
    to{
        background: ${colors.DARKWHITE};
    }
`