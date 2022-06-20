import { css } from '@emotion/css';
import react, { useContext } from 'react';
import { colors } from '../../../../constants/css/colors';
import { PAGE_MENU_CONSTANTS } from '../../../GlobalConstants';
import { GlobalContext } from '../../../GlobalContext';
import { CONTACT_CONTENT_CONSTANTS } from './ContactConstants';
import { LinkedInLogo } from './LinkedInLogo';
import { MailLogo } from './MailLogo';



const createMobileContactContentWrapperStyles= (screenWidth:number) => css({
    marginLeft: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: CONTACT_CONTENT_CONSTANTS.GAP,
})

const iconWrapperStyles= css({
    flex:'0 0 auto',
    width: CONTACT_CONTENT_CONSTANTS.ICON_WIDTH,
    height: CONTACT_CONTENT_CONSTANTS.ICON_HEIGHT,
   
    'svg':{
        fill: colors.LIGHTORANGE,
        cursor: 'pointer',
        width: '100%',
        height: '100%'
    }
})


export const ContactContentWrapperMobile:react.FC<{}> = () => {

    const { screenWidth } = useContext(GlobalContext);

    return(
        <div className={createMobileContactContentWrapperStyles(screenWidth)}>
            <div className={iconWrapperStyles} >
                <a href="https://www.linkedin.com/in/merlin-raabe-147b52175/">
                <LinkedInLogo />
                </a>
            </div>
            <div className={iconWrapperStyles}>
            <a href="mailto:merlinraabe@yahoo.de?subject=Anfrage%20MfRaabe">
                <MailLogo />
                </a>
            </div>

        </div>
    )
}