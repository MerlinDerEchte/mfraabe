import react from 'react';
import {css, keyframes} from '@emotion/react';
import { colors } from '../../../../../../../constants/css/colors';
import { fontSizes } from '../../../../../../../constants/css/fontSizes';

import {
    SERVICE_CONTENT_SELECTION_ANIMATION_TIME, 
    SERVICE_CONTENT_SELECTION_ANIMATION_DELAY,
    SERVICE_CONTENT_DESELECTION_ANIMATION_TIME
} from '../../../../../../../constants/timings';


export const getServiceContentStyles = (isSelected:boolean,isSelectedAndDeselecting:boolean,isOtherSelectedAndDeselecting:boolean) => {

    const serviceContentAnimation = createServiceContentComponentSelectionAnimation(isSelected, isSelectedAndDeselecting,isOtherSelectedAndDeselecting);

    return css({
        display:'block',
        position:'absolute',
        top:'0px',
        left:  isSelected ? '0%' : '50%',
        width:  isSelected && !isSelectedAndDeselecting ? '100%' : '0%',
        height: isSelected && !isSelectedAndDeselecting ? '90%': '0%',
        zIndex: 15,
        overflowX: 'hidden',
        animation: serviceContentAnimation,
        border:  isSelected ? isSelectedAndDeselecting ? 'none' : `1px solid ${colors.LIGHTORANGE}`:'',
        background:colors.DARKBLUE,
        color: colors.DARKWHITE,
        fontSize: fontSizes.SMALL,
        paddingBottom:'30px',
        overflow:'auto',

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


const createServiceContentComponentSelectionAnimation = (isSelected:boolean, isSelectedAndDeselecting:boolean, isOtherSelectedAndDeselecting:boolean) => {
  
    if(isOtherSelectedAndDeselecting){
        return ''
    }

    if(isSelectedAndDeselecting){
        return `${ServiceCardContentDeselectAnimation} ${SERVICE_CONTENT_DESELECTION_ANIMATION_TIME}  ease-in backwards`;
    }
      
    
    if(isSelected){
       return `${ServiceCardContentCompnentSelectionAnimation} ${SERVICE_CONTENT_SELECTION_ANIMATION_TIME} ease-in-out ${SERVICE_CONTENT_SELECTION_ANIMATION_DELAY} backwards` 
    }
    return '';
};

const ServiceCardContentCompnentSelectionAnimation = keyframes`
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
        height:90%;
        overflow:hidden;
    }
`;

const ServiceCardContentDeselectAnimation = keyframes`
    0%{
        width:100%;
        height:90%;
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