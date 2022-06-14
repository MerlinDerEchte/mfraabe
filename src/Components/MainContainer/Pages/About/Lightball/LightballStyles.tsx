import { WIZZARD_CONSTANTS, LIGHTBALL_CONSTANTS, ABOUT_CONTAINER_CONSTANTS,ABOUT_ANIMATION_CONSTANTS, ABOUT_CONTENT_CONSTANTS } from "../AboutConstants";
import { colors } from "../../../../../constants/css/colors";
import { css, keyframes } from "@emotion/css";


export const  createLightBallStyles = (mouseY:number, isSelecting:boolean, isOneSelected:boolean, isDeselecting:boolean) => {

    const mouseDiff = mouseY - WIZZARD_CONSTANTS.RIGHT_ARM_TRANSLATE_Y; 
    const translateXPercentage = 
    1 - ((mouseDiff + ABOUT_CONTAINER_CONSTANTS.MENU_ACTIVATION_TRHESHOLD) /
    ( 2 * ABOUT_CONTAINER_CONSTANTS.MENU_ACTIVATION_TRHESHOLD)) ;
    
    const distanceLeft = WIZZARD_CONSTANTS.DISTANCE_LEFT + translateXPercentage * (-15) ;
    const distanceTop = LIGHTBALL_CONSTANTS.BASE_TOP  + mouseDiff * 0.2;
    
    const activationAnimation = `${createActivationAnimation(distanceLeft, distanceTop)} ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT}ms ease-out forwards`;
    const deactivationAnimation = `
        ${createDeactivationAnimation(distanceLeft, distanceTop)} 
        ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_LIGHT}ms 
        ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_CONTENT_BORDER + ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms
        ease-in
        `;

    const isShining = (mouseY < LIGHTBALL_CONSTANTS.SHINE_BOTTOM_THREASHOLD ) && !(isOneSelected || isSelecting);
    const isActivation = isSelecting && !isOneSelected;
    const isDeactivation = isDeselecting;

    

    const lightballStyles = css({
        position:'absolute',
        zIndex: 10,
        left: distanceLeft,
        opacity: isShining ? 1 : 0,
        top: distanceTop,
        height: LIGHTBALL_CONSTANTS.HEIGHT,
        width: LIGHTBALL_CONSTANTS.WIDTH,
        background:`radial-gradient(closest-side,${colors.LIGHTORANGE}, transparent)`,
        animation: isActivation 
            ?
                activationAnimation 
            : 
                isDeactivation ?
                deactivationAnimation
                :
                ''
        
    })
   
    return lightballStyles;
}
const createDeactivationAnimation = (distanceLeft:number, distanceTop:number)=>{
    return(
        keyframes`
        0%{
            left: ${ABOUT_CONTENT_CONSTANTS.WIDTH / 2 - (2 * LIGHTBALL_CONSTANTS.WIDTH)}px;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP + (ABOUT_CONTENT_CONSTANTS.HEIGHT - ABOUT_ANIMATION_CONSTANTS.LIGHTBALL_INCREASE_FACTOR * LIGHTBALL_CONSTANTS.HEIGHT) / 2}px;
            height: ${LIGHTBALL_CONSTANTS.HEIGHT *  ABOUT_ANIMATION_CONSTANTS.LIGHTBALL_INCREASE_FACTOR}px;
            width: ${LIGHTBALL_CONSTANTS.WIDTH *  ABOUT_ANIMATION_CONSTANTS.LIGHTBALL_INCREASE_FACTOR}px;
            opacity: 0;
            z-index: 0;
        }
        
        40%{
            left: ${(ABOUT_CONTENT_CONSTANTS.WIDTH - LIGHTBALL_CONSTANTS.WIDTH) / 2}px;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP + (ABOUT_CONTENT_CONSTANTS.HEIGHT - LIGHTBALL_CONSTANTS.HEIGHT) / 2}px;
            height: ${LIGHTBALL_CONSTANTS.HEIGHT }px;
            width: ${LIGHTBALL_CONSTANTS.WIDTH }px;
            opacity: 0.8;
        }
        100%{
            left: ${distanceLeft};
            top: ${distanceTop};
            height: ${LIGHTBALL_CONSTANTS.HEIGHT};
            width: ${LIGHTBALL_CONSTANTS.WIDTH};
            opacity: 0.8;
        }`
    )
}

const createActivationAnimation = (distanceLeft:number,distanceTop:number)=> {

    return(
        keyframes`
            0%{
                left: ${distanceLeft};
                top: ${distanceTop};
                height: ${LIGHTBALL_CONSTANTS.HEIGHT};
                width: ${LIGHTBALL_CONSTANTS.WIDTH};
                opacity: 0.8;
            }
            60%{
                left: ${(ABOUT_CONTENT_CONSTANTS.WIDTH - LIGHTBALL_CONSTANTS.WIDTH) / 2}px;
                top: ${ABOUT_CONTENT_CONSTANTS.TOP + (ABOUT_CONTENT_CONSTANTS.HEIGHT - LIGHTBALL_CONSTANTS.HEIGHT) / 2}px;
                height: ${LIGHTBALL_CONSTANTS.HEIGHT }px;
                width: ${LIGHTBALL_CONSTANTS.WIDTH }px;
                opacity: 0.8;
            }
            100%{
                left: ${ABOUT_CONTENT_CONSTANTS.WIDTH / 2 - (2 * LIGHTBALL_CONSTANTS.WIDTH)}px;
                top: ${ABOUT_CONTENT_CONSTANTS.TOP + (ABOUT_CONTENT_CONSTANTS.HEIGHT - ABOUT_ANIMATION_CONSTANTS.LIGHTBALL_INCREASE_FACTOR * LIGHTBALL_CONSTANTS.HEIGHT) / 2}px;
                height: ${LIGHTBALL_CONSTANTS.HEIGHT *  ABOUT_ANIMATION_CONSTANTS.LIGHTBALL_INCREASE_FACTOR}px;
                width: ${LIGHTBALL_CONSTANTS.WIDTH *  ABOUT_ANIMATION_CONSTANTS.LIGHTBALL_INCREASE_FACTOR}px;
                opacity: 0;
                z-index: 0;
            }

        `
    );
}