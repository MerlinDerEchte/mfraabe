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
    transform:rotate(0)
}
50%{
    transform:rotate(1deg);
}
100%{
    transform:rotate(0);
}
`;
const RightArmAnimation = keyframes`
0%{
    transform:rotate(0)
}
50%{
    transform:rotate(90deg);
}
100%{
    transform:rotate(0);
}
`;

export const WizzardWrapperStyles = css({
    position: 'absolute',
    width: WIZZARD_WIDTH,
    height: WIZZARD_HEIGHT,
    right: WIZZARD_DISTANCE_RIGHT,
    top: WIZZARD_DISTANCE_TOP,
    
    'svg':{
        position: 'relative',
        stroke: colors.LIGHTORANGE,
        fill: colors.DARKBLUE,

        '#head':{
           
        },
        
        '#right-arm':{
            transform:'translateY(20px) translateX(20px) rotate(90deg)',
            transformOrigin: '45% 44%',
        },
        '#left-arm':{
  
            animation: `${LeftArmAnimation} 1s ease-in-out infinite`,
            transformOrigin: '60% 52%',
        
        },
        '#magicwand':{

        }
    }
})
