import {css, keyframes} from '@emotion/react';
import { colors } from '../../../../../../../constants/css/colors';
import { fontSizes } from '../../../../../../../constants/css/fontSizes';
import { PAGE_CONSTANTS } from '../../../../PageConstants';
import { DEVELOPMENT_ANIMATION_TIMINGS, DEVELOPMENT_CARD_CONSTANTS } from '../../../DevelopmentConstants';


export const getDevelopmentContentStyles = (isSelected:boolean, isSelecting:boolean, isSelectedAndDeselecting:boolean,isOtherSelectedAndDeselecting:boolean, screenHeight:number) => {

    const developmentContentHeight = screenHeight - PAGE_CONSTANTS.MARGIN_TOP - PAGE_CONSTANTS.MARGIN_BOTTOM - (DEVELOPMENT_CARD_CONSTANTS.HEIGHT + DEVELOPMENT_CARD_CONSTANTS.SELECTED_TRANSLATE_Y)
    const developmentContentAnimation = createServiceContentComponentSelectionAnimation(isSelected, isSelecting, isSelectedAndDeselecting,isOtherSelectedAndDeselecting, developmentContentHeight);

    return css({
        display:'block',
        position:'absolute',
        top: isSelected ? 130 : 0,
        left:  isSelected ? '0%' : '50%',
        width:  isSelected && !isSelectedAndDeselecting && !isSelecting ? '100%' : '0%',
        height: isSelected && !isSelectedAndDeselecting ? developmentContentHeight : 0,
        zIndex: 15,
        overflowX: 'hidden',
        animation: developmentContentAnimation,
        border:  isSelected ? isSelectedAndDeselecting ? 'none' : `1px solid ${colors.LIGHTORANGE}`:'',
        background:colors.DARKBLUE,
        color: colors.DARKWHITE,
        fontSize: fontSizes.SMALL,
        paddingBottom:'30px',
        overflowY:'auto',

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
        '.centered':{
            width: '100%',
            paddingTop:10,
            paddingBottom:10,
            display:'flex',
            justifyContent: 'center',
            alignContent: 'center',
        } 
        
    })
}


const createServiceContentComponentSelectionAnimation = (isSelected:boolean, isSelecting:boolean, isSelectedAndDeselecting:boolean, isOtherSelectedAndDeselecting:boolean, developmentContentHeight:number) => {
  
    if(isOtherSelectedAndDeselecting){
        return ''
    }

    if(isSelectedAndDeselecting){
        return `${createDevelopmentCardContentDeselectAnimation(developmentContentHeight)} ${DEVELOPMENT_ANIMATION_TIMINGS.CONTENT_DESELECTION_TIME}ms  ease-in backwards`;
    }
      
    
    if(isSelected && isSelecting){
       return `${createDevelopmentContentSelectionAnimation(developmentContentHeight)} ${DEVELOPMENT_ANIMATION_TIMINGS.CONTENT_SELECTION_TIME}ms ease-in-out ${DEVELOPMENT_ANIMATION_TIMINGS.CONTENT_SELECTION_DELAY}ms backwards` 
    }
    return '';
};


const createDevelopmentContentSelectionAnimation = (developmentContentHeight:number) => keyframes`
    0%{
        width:0;
        height:0;
        left:50%;
        overflow:hidden;
        border: 0px;
    }
    30%{
        width: 10%;
        height:2px;
        left: 45%;
        overflow:hidden;
    }
    60%{
        width: 100%;
        height:2px;
        left: 0;
        overflow:hidden;
    }
    100%{
        width:100%;
        height: ${developmentContentHeight}px;
        overflow:hidden;
    }
`;
        
const createDevelopmentCardContentDeselectAnimation = (developmentContentHeight:number) => keyframes`
    0%{
        width:100%;
        height:${developmentContentHeight}px;
        overflow:hidden;
        border: 1px solid ${colors.LIGHTORANGE};
    }
    30%{
        width: 100%;
        height:2px;
        left: 0;
        overflow:hidden;
    }
    60%{
        width: 10%;
        height:2px;
        left: 45%;
        overflow:hidden;
        border: 1px solid ${colors.LIGHTORANGE};
    }
    100%{
        border: 0px solid ${colors.LIGHTORANGE};
        width:0;
        height:0;
        left:50%;
        overflow:hidden;
    }
`;