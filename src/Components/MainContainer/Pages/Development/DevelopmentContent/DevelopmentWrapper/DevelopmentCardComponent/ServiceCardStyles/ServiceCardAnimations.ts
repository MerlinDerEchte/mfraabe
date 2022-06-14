import { keyframes } from "@emotion/css";
import { colors } from "../../../../../../../../constants/css/colors";
import { DEVELOPMENT_CARD_CONSTANTS } from "../../../../DevelopmentConstants";


export const ServiceCardStartAnimation = keyframes`
    0%{
        transform: translateY(-50px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        
        opacity: 1;
    }
`;


export const ServiceCardStartUnderlineAnimation = keyframes`
    0%{
        left: calc(${DEVELOPMENT_CARD_CONSTANTS.WIDTH} / 2 ); width:  10px;
    }
    100% {
        left: 10; width: calc(${DEVELOPMENT_CARD_CONSTANTS.WIDTH} - 20px);
    }
`;

export const ServiceCardHoverAnimation:any= keyframes`
    0%{
        transform: translateY(0px);
    }
    100% {
        transform: translateY(-10px);
    }
`;

export const ServiceCardTitleUnderlineHoverAnimation= keyframes`
    0%{
        left:10px; width: calc(${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px - 20px);
    }
    100% {
        left: 0px; width: ${DEVELOPMENT_CARD_CONSTANTS.WIDTH };
    }
`;

export const ServiceCardHoverIconAnimation = keyframes`
    0%{ 
        fill: ${colors.DARKWHITE};	
    }
    100%{
        fill: ${colors.LIGHTORANGE};
    }
`;

export const createServiceCardSelectionAnimation = (index:number) => keyframes`
    0%{
        transform:translateY(0px);
        left: calc(0px + ${index} * (${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px + ${DEVELOPMENT_CARD_CONSTANTS.GAP}px));
    }
    50% {
        transform:translateY(${DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y}px);
        left: calc(0px + ${index} * (${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px + ${DEVELOPMENT_CARD_CONSTANTS.GAP}px ));

    }
    100% {
        transform:translateY(${DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y}px);
        left: calc(0px + ${1} * (${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px + ${DEVELOPMENT_CARD_CONSTANTS.GAP}px ) ;
    }
`
export const createServiceCardDeselectAnimation = (index:number) => keyframes`
    0%{
        transform:translateY(${DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y}px);
        left: calc(${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px + ${DEVELOPMENT_CARD_CONSTANTS.GAP}px ) ;
    }
    50%{
        left: calc(0px + ${index} * (${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px + ${DEVELOPMENT_CARD_CONSTANTS.GAP}px ));
        transform:translateY(${DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y});

    }
    100% {
        transform:translateY(${DEVELOPMENT_CARD_CONSTANTS.TRANSLATE_Y}px);
        left: calc(0px + ${index} * (${DEVELOPMENT_CARD_CONSTANTS.WIDTH}px + ${DEVELOPMENT_CARD_CONSTANTS.GAP}px ));
    }
`;

export const ServiceCardContentSelectionAnimation = keyframes`
    0%{
        margin-top:${DEVELOPMENT_CARD_CONSTANTS.INNER_MARGIN_TOP}px;
    }
    100% {
        margin-top:${DEVELOPMENT_CARD_CONSTANTS.SELECTED_INNER_MARGIN_TOP}px;
    }
`;
export const ServiceCardContentDeselectionAnimation = keyframes`
    0%{
        margin-top:${DEVELOPMENT_CARD_CONSTANTS.SELECTED_INNER_MARGIN_TOP}px;
    }
    100% {
        margin-top:${DEVELOPMENT_CARD_CONSTANTS.INNER_MARGIN_TOP}px;
    }
`;
export const ServiceCardOtherServiceSelectionAnimation = keyframes`
    0%{
        opacity:1;
    }
    100%{
        opacity:0.2;
    }
`;

export const ServiceCardOtherServiceDeselectionAnimation = keyframes`
0%{
    opacity:0.2;
}
100%{
    opacity:1;
}
`;