import {css,keyframes } from '@emotion/react';

import { colors } from '../../../../../../../constants/css/colors';
import { 
    SERVICE_CARD_DESELECTION_ANIMATION_DELAY,
    SERVICE_CARD_DESELECTION_ANIMATION_TIME,
    SERVICE_CARD_SELECTION_ANIMATION_TIME,

     } from '../../../../../../../constants/timings';


const SERVICE_DESELECT_WIDTH = '50px';
const SERVICE_DESELECT_HEIGHT = '50px';
const SERVICE_DESELECT_LINE_WIDTH = '6px';

const SERVICE_DESELECT_HOVER_ANIMATION_TIME = 0.2;
export const createServiceDeselectStyles = (isOneSelected:boolean,isDeselecting:boolean) => {

    const serviceDeselectAnimation = createServiceDeselectAnimation(isOneSelected, isDeselecting);

    return css({
        animation: serviceDeselectAnimation,
        position:'absolute',
        opacity: isOneSelected ? 1 : 0,
        right:  0,
        top: -150,
        zIndex: 15,
        width:SERVICE_DESELECT_WIDTH,
        height: SERVICE_DESELECT_HEIGHT,
        background: colors.DARKBLUE,

        '.xBackground':{
            position:'absolute',
            content: `''`,
            width: '100%',
            height: SERVICE_DESELECT_LINE_WIDTH,
            
            borderRadius: 6,
            zIndex: 16,
            top: '50%',
            left: '0',
            background: colors.DARKBLUE,
            transform: `rotateZ(45deg)`,
            boxShadow: `0px 0px 3px 1px ${colors.LIGHTORANGE}`
        },
        '.xForeground':{
            position:'absolute',
            zIndex: 16,
            content: `''`,
            width:'100%',
            height: SERVICE_DESELECT_LINE_WIDTH,
            
            borderRadius: 6,
            top: '50%',
            left: '0',
            background: colors.DARKBLUE,
            transform: `rotateZ(-45deg)`,
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
                animation: `${ServiceDeselctHoverXAnimation} ${SERVICE_DESELECT_HOVER_ANIMATION_TIME}s ease-in-out 0s backwards`,
                '::before': {
                    background: colors.DARKWHITE,
                    animation: `${ServiceDeselctHoverXBeforeAnimation} ${SERVICE_DESELECT_HOVER_ANIMATION_TIME}s ease-in-out 0s backwards`,
                }
               
            },
            '.xBackground':{
                boxShadow: `0px 0px 3px 1px ${colors.DARKWHITE}`,
                background: colors.DARKWHITE,
                animation: `${ServiceDeselctHoverXAnimation} ${SERVICE_DESELECT_HOVER_ANIMATION_TIME}s ease-in-out 0s backwards`,
            }
        }
    });
}

const createServiceDeselectAnimation = (isOneSelected:boolean, isDeselecting:boolean) => {
    if(isDeselecting){
        return `${ServiceDeselectDisapperAnimation} ${SERVICE_CARD_DESELECTION_ANIMATION_TIME} ease-in-out ${SERVICE_CARD_DESELECTION_ANIMATION_DELAY} backwards`;
    }
    if(isOneSelected){
        return `${ServiceDeselectInitAnimation} ${SERVICE_CARD_SELECTION_ANIMATION_TIME} ease-in-out 0s backwards`
    };
    return '0s';

}

const ServiceDeselectInitAnimation = keyframes`
    from{
        opacity:0;
        top: 0px;
        right: 0px;
    }   
    to{
        opactiy:1;
        top: -150px;
        right: 0px;
    }
`;
const ServiceDeselectDisapperAnimation = keyframes`
    from{
        opactiy:1;
        top: -150px;
        right: 0px;
    }   
    to{
        opacity:0;
        top: 0px;
        right: 0px;
    }
`;

const ServiceDeselctHoverXAnimation = keyframes`
    from{
        boxShadow: 0px 0px 3px 1px ${colors.LIGHTORANGE};
        background: ${colors.DARKBLUE};
    }
    to{
        boxShadow: 0px 0px 3px 1px ${colors.DARKWHITE};
        background: ${colors.DARKWHITE};
    }
`
const ServiceDeselctHoverXBeforeAnimation = keyframes`
    from{
        background: ${colors.DARKBLUE};
    }
    to{
        background: ${colors.DARKWHITE};
    }
`