import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";
import { colors } from "../../../../../../constants/css/colors";


const WIZZARD_DISTANCE_TOP = '100px';
const WIZZARD_DISTANCE_RIGHT = '50px';

export const WIZZARD_WIDTH = '200px'
export const WIZZARD_HEIGHT = `calc(1.75 * ${WIZZARD_WIDTH})`;





const HeadAnimation = keyframes`
    0%{
        transform:rotate(0deg);
    }
    50%{
        transform:rotate(1deg);
    }
    100%{
        transform:rotate(0deg);
    }
`;
const LeftArmAnimation = keyframes`
0%{
    transform:rotate(0deg);
}
50%{
    transform:rotate(-1deg);
}
100%{
    transform:rotate(0deg);
}
`;


export const WizzardWrapperStyles = css({
    position: 'absolute',
    width: WIZZARD_WIDTH,
    height: WIZZARD_HEIGHT,
    right: WIZZARD_DISTANCE_RIGHT,
    top: WIZZARD_DISTANCE_TOP,
    'svg':{
        stroke: colors.LIGHTORANGE,
        fill: colors.DARKBLUE,

        '#head':{
           
        },
        
        '#right-arm':{
          
        },
        '#left-arm':{
            
        },
        '#magicwand':{

        }
    }
})
