import react, { useContext } from 'react';
import { Page } from '../Page';
import { createContactStyles } from './ContactStyles';
import { ContactContentWrapper } from './ContactContentWrapper';
import { GlobalContext } from '../../../../GlobalContext';
export const Contact:react.FC = () => {
    const { isInit, isStart, screenWidth, screenHeight } = useContext(GlobalContext);
    const contactStyles = createContactStyles(isInit, isStart, screenWidth, screenHeight)
    return(
        <Page>
            <div className={contactStyles}>
                <ContactContentWrapper />
            </div>
        </Page>
    )
}