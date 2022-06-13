import { css } from '@emotion/css';
import react from 'react';
import { colors } from '../../../../constants/css/colors';
import { LinkedInLogo } from './LinkedInLogo';
import { MailLogo } from './MailLogo';



const contentWrapperStyles = css({
    flex: ' 0 0 auto',
    height: 80,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    gap: 50
})

const iconWrapperStyles= css({
    flex:'0 0 auto',
    width: 80,
    height: 80,
   
    'svg':{
        fill: colors.LIGHTORANGE,
        cursor: 'pointer',
        width: '100%',
        height: '100%'
    }
})


export const ContactContentWrapper:react.FC<{}> = () => {



    return(
        <div className={contentWrapperStyles}>
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