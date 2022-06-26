import { css } from "@emotion/css";
import { colors } from "../../../../../constants/css/colors";

export const aboutMobileStyles = css({

    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    lineHeight: 1.2,
    color: colors.DARKWHITE,
    alignItems:'center',
    gap: 30,
    '.aboutCardPhotoWrapper':{
        maxWidth: '80%',
    },
    '.aboutInfoWrapper':{
       
    },
    '.aboutMeTemplateWrapper':{
        textAlign: 'left',
        maxWidth: '80%',
        'ul':{
            paddingLeft: 20,
            listStyle: 'circle',
            textAlign: 'left',
            'li':{
                marginTop:5,
            }
        }
    }
})