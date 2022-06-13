import { css, keyframes } from "@emotion/css";
import { colors } from "../../../../../../constants/css/colors";
import { Directions } from "../../../../../../constants/Directions";
import { ABOUT_ANIMATION_CONSTANTS, ABOUT_CONTENT_CONSTANTS } from "../../AboutConstants";

export const createAboutContentBorderStyles = (direction:Directions, isOneSelected:boolean, isSelecting:boolean,  isDeselecting:boolean, isSwitching:boolean, screenHeight:number) => {

    const borderHeight = Math.min(screenHeight - 200 - 50, ABOUT_CONTENT_CONSTANTS.HEIGHT)

    const rightSelectingAnimation = keyframes`
        0%{
         
            opacity: 1;
            width: 1px;
            height: 1px;
           top: ${ABOUT_CONTENT_CONSTANTS.TOP +borderHeight / 2}px;
           left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
        }
       100%{
       
            opacity: 1;
            left: ${ ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH}px;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
            height: ${ borderHeight}px;
            width: 1px;
        }
    `;
    const leftSelectingAnimation = keyframes`
       0%{
       
            width: 1px;
            height: 1px;
            opacity: 1;
           top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
           left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
        }
        100%{

            width: 0px,
            height: 0px;
            opacity: 1;
            left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
        }
    `;
    const topSelectingAnimation = keyframes`
        0%{
      
            width: 1px;
            height: 1px;
            opacity: 1;
           top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
           left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
        }
        100%{
            
            width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px,
            height: 0;
            opacity: 1;
            left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
        }
    `;
    const bottomSelectingAnimation = keyframes`
        0%{
       
            width: 1px;
            height: 1px;
            opacity: 1;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
            left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
        }
        100%{
        
            opacity: 1;
            left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
            top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight}px;
            width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px;
            height: 1px;
        }
    `;

    const rightDeselectingAnimation = keyframes`
    0%{
        opacity: 1;
        left: ${ ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
        height: ${borderHeight}px;
        width: 1px; 
    }
   100%{
   
    opacity: 1;
    width: 1px;
    height: 1px;
   top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
   left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
    }
    `;
    const leftDeselectingAnimation = keyframes`
    0%{
        width: 0px,
        height: 0px;
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
     }
     100%{
        width: 1px;
        height: 1px;
        opacity: 1;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
     }
 `;
 const topDeselectingAnimation = keyframes`
     0%{
        width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px,
        height: 0;
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
     }
     100%{
        width: 1px;
        height: 1px;
        opacity: 1;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
     }
 `;
 const bottomDeselectingAnimation = keyframes`
     0%{
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight}px;
        width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px;
        height: 1px;
     }
     100%{
        width: 1px;
        height: 1px;
        opacity: 1;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP +  borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
     }
 `;
 const topSwitchingAnimation = keyframes`
     0%{
        width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px,
        height: 0;
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
     }
     50%{
        width: 1px;
        height: 1px;
        opacity: 1;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
     }
     100%{
        width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px,
        height: 0;
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
     }
 `;
 const bottomSwitchingAnimation = keyframes`
     0%{
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP +  borderHeight}px;
        width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px;
        height: 1px;
     }
    50%{
        width: 1px;
        height: 1px;
        opacity: 1;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
     }
     100%{
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight}px;
        width: ${ABOUT_CONTENT_CONSTANTS.WIDTH}px;
        height: 1px;
     }
 `;
 const rightSwitchingAnimation = keyframes`
    0%{
        opacity: 1;
        left: ${ ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
        height: ${ borderHeight}px;
        width: 1px; 
    }
    50%{
        opacity: 1;
        width: 1px;
        height: 1px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP +borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
    }
    100%{
        opacity: 1;
        left: ${ ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
        height: ${ borderHeight }px;
        width: 1px; 
    }
 `;
 const leftSwitchingAnimation = keyframes`
    0%{
        width: 0px,
        height: 0px;
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
    }
    50%{
        width: 1px;
        height: 1px;
        opacity: 1;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP + borderHeight / 2}px;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH / 2 }px;
    }
    100%{
        width: 0px,
        height: 0px;
        opacity: 1;
        left: ${ABOUT_CONTENT_CONSTANTS.LEFT}px;
        top: ${ABOUT_CONTENT_CONSTANTS.TOP}px;
    }
`;

  if(direction === Directions.TOP){
      return css(
        {   
            zIndex:15,
            opacity: isOneSelected && !isDeselecting ? 1 : 0, 
            position:'absolute',
            background: colors.LIGHTORANGE,
            left: ABOUT_CONTENT_CONSTANTS.LEFT,
            top: ABOUT_CONTENT_CONSTANTS.TOP,
            width:ABOUT_CONTENT_CONSTANTS.WIDTH,
            height: 1,
            animation: isSelecting ? 
                    `
                    ${topSelectingAnimation} 
                    ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms 
                    ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT}ms 
                    ease-out 
                    forwards
                    `
                    :
                    isDeselecting ? 
                        ` ${topDeselectingAnimation} 
                        ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms
                        ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms
                        ease-out
                        `
                        :
                        isSwitching ?
                            ` ${topSwitchingAnimation} 
                            ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_BORDER_OUT}ms
                            ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_OUT}ms
                            ease-out
                            `
                            :
                            'none',
                
            
      })
  }

  if(direction === Directions.RIGHT){
    return css({
            zIndex:15,
            opacity: isOneSelected && !isDeselecting ? 1 : 0, 
            position:'absolute',
            background: colors.LIGHTORANGE,
            width: 1,
            height:borderHeight ,
            left: ABOUT_CONTENT_CONSTANTS.LEFT + ABOUT_CONTENT_CONSTANTS.WIDTH,
            top: ABOUT_CONTENT_CONSTANTS.TOP, 
            animation: isSelecting ? 
                `${rightSelectingAnimation} 
                ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms 
                ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT}ms 
                ease-out 
                forwards`
                :
                    isDeselecting ? 
                        ` ${rightDeselectingAnimation} 
                        ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms
                        ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms
                        ease-out
                        `
                        :
                        isSwitching ?
                            ` ${rightSwitchingAnimation} 
                            ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_BORDER_OUT}ms
                            ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_OUT}ms
                            ease-out
                            `
                            :
                            'none',
    })
  }
  if(direction === Directions.BOTTOM){
    return css({
            zIndex:15,
            opacity: isOneSelected && !isDeselecting ? 1 : 0, 
            position:'absolute',
            background: colors.LIGHTORANGE,
            width: ABOUT_CONTENT_CONSTANTS.WIDTH,
            height: 1,
            left: ABOUT_CONTENT_CONSTANTS.LEFT,
            top: ABOUT_CONTENT_CONSTANTS.TOP +borderHeight,
            animation: isSelecting ?
                `${bottomSelectingAnimation}
                ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms 
                ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT}ms 
                ease-out
                forwards`
                :
                    isDeselecting ? 
                    ` ${bottomDeselectingAnimation} 
                    ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms
                    ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms
                    ease-out
                    `
                    :
                    isSwitching ?
                        ` ${bottomSwitchingAnimation} 
                        ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_BORDER_OUT}ms
                        ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_OUT}ms
                        ease-out
                        `
                        :
                        'none',
    })
  }

  if(direction === Directions.LEFT){
    return css({
            zIndex:15,
            opacity: isOneSelected && !isDeselecting ? 1 : 0, 
            position:'absolute',
            background: colors.LIGHTORANGE,
            width: 1,
            height:borderHeight,
            left: ABOUT_CONTENT_CONSTANTS.LEFT,
            top: ABOUT_CONTENT_CONSTANTS.TOP, 
            animation: isSelecting ?
                `${leftSelectingAnimation}
                ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms 
                ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT}ms 
                ease-out
                forwards`
                :
                isDeselecting ? 
                    ` ${leftDeselectingAnimation} 
                    ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms
                    ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms
                    ease-out
                    `
                    :
                    isSwitching ? 
                        `
                        ${leftSwitchingAnimation} 
                        ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_BORDER_OUT}ms
                        ${ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_OUT}ms                   
                        `
                        :
                        'none',
    })
  }
};



