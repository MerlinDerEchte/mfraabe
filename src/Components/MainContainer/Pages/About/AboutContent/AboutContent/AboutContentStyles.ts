
import { css } from "@emotion/css";
import { keyframes } from "@emotion/css";
import { fontSizes } from "../../../../../../constants/css/fontSizes";
import { colors } from "../../../../../../constants/css/colors";
import { ABOUT_CONTENT_CONSTANTS, ABOUT_ANIMATION_CONSTANTS } from "../../AboutConstants";
export const createAboutContentStyles = (isSelected:boolean, isSelecting:boolean, isDeselecting:boolean) => css({
    position:'absolute',
    top: ABOUT_CONTENT_CONSTANTS.TOP,
    opacity: isSelected ? 1 : 0 ,
    width: ABOUT_CONTENT_CONSTANTS.WIDTH,
    paddingLeft: ABOUT_CONTENT_CONSTANTS.LEFT,
    zIndex: 15,
    overflowY: 'scroll',
    height: ABOUT_CONTENT_CONSTANTS.HEIGHT,
    animation: isSelecting ? 
        `${aboutContentSelectingAnimation}
        ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT}ms
        ${ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT + ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER}ms
        linear
        backwards
       ` 
        :
        isDeselecting ?
            `${aboutContentDeselectingAnimation}
            ${ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT}ms
            linear
            backwards
           ` 
            :
            '',
    color: colors.DARKWHITE,
    fontSize: fontSizes.SMALL,

    'h1':{
        fontSize: fontSizes.BIG,
        fontWeight: 100,
        textAlign: 'left',
        marginLeft:30,
        marginRight:20,
        marginTop: 40,
        marginBottom:15,
        '&:first-of-type':{
            marginTop: 20,
        }
    },
    'h2':{
        fontSize: fontSizes.NORMAL,
        fontWeight: 50,
        textDecoration:'underline',
        textAlign: 'left',
        marginLeft:30,
        marginRight:20,
        marginTop: 40,
        marginBottom:15,
        '&:first-of-type':{
            marginTop: 20,
        }
    },
    'p':{
        textAlign: 'left',
        fontSize: fontSizes.SMALL,
        marginLeft: 40,
        marginRight:30,
        marginTop:10,
    },
    'ul':{
        margin:'15px 30px 0 0px',
        textAlign: 'left',
        listStyleType: 'none',
        'li':{
           
        }
    },
    'a':{
        textDecoration: `underline`,
        textDecorationColor: colors.LIGHTORANGE,
        textDecorationThickness: 1,
        lineHeight: `${fontSizes.SMALL}px`,
        cursor: 'pointer',
    },
});


const aboutContentSelectingAnimation = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
const aboutContentDeselectingAnimation = keyframes`
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;