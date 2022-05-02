import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";
import { colors } from "../../../../../../../constants/css/colors";


const WIZZARD_DISTANCE_TOP = '0px';
const WIZZARD_DISTANCE_RIGHT = '0px';

export const WIZZARD_WIDTH = '150px'
export const WIZZARD_HEIGHT = `calc(1.75 * ${WIZZARD_WIDTH})`;

const WIZZARD_RIGHT_ARM_TRANSLATE_X = '120px';
const WIZZARD_RIGHT_ARM_TRANSLATE_Y = '170px';
const WIZZARD_RIGHT_ARM_ROTATION = '80deg' ;

const WIZZARD_LEFT_ARM_TRANSLATE_X = '90px';
const WIZZARD_LEFT_ARM_TRANSLATE_Y = '170px';
const WIZZARD_LEFT_ARM_ROTATION = '2deg';

const WIZZARD_MAGIC_WAND_TRANSLATE_X = '-50px';
const WIZZARD_MAGIC_WAND_TRANSLATE_Y = '60px' ;

const WIZZARD_BODY_TRANSLATE_X = '50px';
const WIZZARD_BODY_TRANSLATE_Y = '150px';

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
        position: 'absolute',
        right:0,
        top:0,
        zindex:1,
        stroke: colors.LIGHTORANGE,
        fill: colors.DARKBLUE,
        height:'100%',
        width:'100%',

        '#head':{
           
        },
        
        '#right-arm':{
            transform:`translateX(${WIZZARD_RIGHT_ARM_TRANSLATE_X}) translateY(${WIZZARD_RIGHT_ARM_TRANSLATE_Y}) rotate(${WIZZARD_RIGHT_ARM_ROTATION})`,
           
        },
        '#left-arm':{
            transform: `translateX(${WIZZARD_LEFT_ARM_TRANSLATE_X}) translateY(${WIZZARD_LEFT_ARM_TRANSLATE_Y}) rotate(${WIZZARD_LEFT_ARM_ROTATION})`,
            transformOrigin: '170 105',
        
        },
        '#magicwand':{
            transform:`translateX(${WIZZARD_MAGIC_WAND_TRANSLATE_X}) translateY(${WIZZARD_MAGIC_WAND_TRANSLATE_Y})`,
            '#magicLight':{
                fill: `linear`
            }
        },
        '#wizzard-body':{
            transform:`translateX(${WIZZARD_BODY_TRANSLATE_X}) translateY(${WIZZARD_BODY_TRANSLATE_Y})`,
        }
    }
})


export const  createLightBallStyles = (mouseX:number,mouseY:number) => {
    
   
    const lightballStyles = css({
        position:'absolute',
        zIndex:10,
        left:  (mouseX - 600) / 30 ,
        opdacity: 0.8,
        top: 50 + (mouseY - 90) / 20,
        height: 75,
        width: 75,
        background:`radial-gradient(closest-side,${colors.LIGHTORANGE}, transparent)`
    })
   
    return lightballStyles;
}
