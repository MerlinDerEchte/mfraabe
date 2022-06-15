import { css } from "@emotion/css";
import { colors } from "../../../../../../constants/css/colors";
import { WIZZARD_CONSTANTS } from "../../AboutConstants";

export const WizzardWrapperStyles = css({
    position: 'absolute',
    width: WIZZARD_CONSTANTS.WIDTH,
    height: WIZZARD_CONSTANTS.HEIGHT,
    left: WIZZARD_CONSTANTS.DISTANCE_LEFT,
    top: WIZZARD_CONSTANTS.DISTANCE_TOP,
    
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
        '#left-arm':{
            transform: `translateX(${WIZZARD_CONSTANTS.LEFT_ARM_TRANSLATE_X}px) translateY(${WIZZARD_CONSTANTS. LEFT_ARM_TRANSLATE_Y}px) rotate(${WIZZARD_CONSTANTS. LEFT_ARM_ROTATION})`,
            transformOrigin: '170 105',
        },
        '#wizzard-body':{
            transform:`translateX(${WIZZARD_CONSTANTS.BODY_TRANSLATE_X}px) translateY(${WIZZARD_CONSTANTS.BODY_TRANSLATE_Y}px)`,
        }
    }
})

export const createMagicwandStyles = (mouseY:number) => {


    const mouseThreshold = 80;
    const minY = WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y - mouseThreshold;
    const maxY = WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y + mouseThreshold ;
    const mouseDiff = mouseY - WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y; 
    const magicwandAmplitudeY = 60;
    const translateX = WIZZARD_CONSTANTS.MAGIC_WAND_TRANSLATE_X + 35 * ((mouseDiff + mouseThreshold) / ( 2 * mouseThreshold));
    const translateY = WIZZARD_CONSTANTS.MAGIC_WAND_TRANSLATE_Y + magicwandAmplitudeY  * ((mouseDiff + mouseThreshold) / ( 2 * mouseThreshold));
    const minRotationPercentage = 0.4;
    const rotationPercentage = Math.max(1 - ((mouseDiff + mouseThreshold) / ( 2 * mouseThreshold)),minRotationPercentage);
    
    const maxRotation = '-10deg'

    if(mouseY < minY){
        return css({
            transform:`translateX(${ WIZZARD_CONSTANTS.MAGIC_WAND_TRANSLATE_X}px) translateY(${ WIZZARD_CONSTANTS.MAGIC_WAND_TRANSLATE_Y}px) rotate(${maxRotation})`,
        })
    }
    if(mouseY > maxY){
        return css({
            transform:`translateX(${ WIZZARD_CONSTANTS.MAGIC_WAND_TRANSLATE_X + 35}px) translateY(${WIZZARD_CONSTANTS.MAGIC_WAND_TRANSLATE_Y + magicwandAmplitudeY}px) rotate(calc(${minRotationPercentage} * ${maxRotation}))`,
           
        })
    }
   
    return css({
        transform:`translateX(${translateX}px) translateY(${translateY}px) rotate(calc(${maxRotation} * ${rotationPercentage} ))`,
        
    })
}


export const createRightArmStyles = (mouseY:number) => {
    const mouseThreshold = 80
    const minY = WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y - mouseThreshold;
    const maxY = WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y + mouseThreshold;
    const mouseDiff = mouseY - WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y; 
    const minDegree = '70deg';
    const maxDegree = '100deg';

    const percentageOfMaxDegree:number= 0.7 + -(mouseDiff - mouseThreshold) / (2 * mouseThreshold) * 0.3 ;

    if(mouseY < minY){
        return css({
            transform:`translateX(${WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_X}px) translateY(${WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y}px) rotate(${maxDegree})`,
        })
    }
    if(mouseY > maxY){
        return css({
            transform:`translateX(${WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_X}px) translateY(${WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y}px) rotate(${minDegree})`,
        })
    }
   
    return css({
        transform:`translateX(${WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_X}px) translateY(${WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y}px) rotate(calc( ${maxDegree} * ${percentageOfMaxDegree} ))`,
    })
    
    
}