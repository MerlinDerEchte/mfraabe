import { css, keyframes } from "@emotion/css"
import { colors } from "../../../../../../../../constants/css/colors"
import { fontSizes } from "../../../../../../../../constants/css/fontSizes"
import { MOBILE_ANIMATION_TIMINGS } from "../../../../../../../GlobalConstantsMobile"

export const createMobileDevelopmentSectionContentStyles = ()  => {

    
    return css({
        height: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        paddingLeft: 40,
        paddingRight: 40,
        textAlign: 'left',
       
        'h1': {
            fontSize: fontSizes.SMALL,
        },
        'ul':{
            paddingLeft: 20,
            listStyle: 'circle',
            textAlign: 'left'
        },      
        'p':{
            textAlign: 'left',
        },        
        '.cvWrapper':{
            width: '100%',
            height: 80,
            display: 'flex',
            justifyContent:'center',
            cursor: 'pointer',
            'svg':{
                height:80,
                widht:80,
                fill: colors.LIGHTORANGE
            }
        },
        'a':{
            textDecoration: 'underline',
            textDecorationColor: colors.LIGHTORANGE,
        }
    })
}


