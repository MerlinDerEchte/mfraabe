import react, { useContext } from 'react';
import { Page } from '../Page';
import { createContactStyles } from './ContactStyles';
import { ContactContentWrapper } from './ContactContentWrapper';
import { GlobalContext } from '../../../GlobalContext';
import { createMobileContactStyles } from './ContactStylesMobile';
import { ContactContentWrapperMobile } from './ContactContentWrapperMobile';
export const Contact:react.FC = () => {
    const { isInit, isStart, isMobile, screenWidth, screenHeight } = useContext(GlobalContext);
    
    if( isMobile ) {
        const mobileContactStyles = createMobileContactStyles({isInit, isStart, screenHeight, screenWidth})
        return(
            <Page>
                <div className={mobileContactStyles}>
                    <ContactContentWrapperMobile />
                </div>
            </Page>
        )
    }
    const contactStyles = createContactStyles({isInit, isStart, screenWidth, screenHeight})

    return(
        <Page>
            <div className={contactStyles}>
                <ContactContentWrapper />
            </div>
        </Page>
    )
}