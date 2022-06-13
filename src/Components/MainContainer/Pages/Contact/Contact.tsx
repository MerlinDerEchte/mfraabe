import react from 'react';
import { Page } from '../Page';
import { contactStyles } from './ContactStyles';
import { ContactContentWrapper } from './ContactContentWrapper';
export const Contact:react.FC = () => {
    
    return(
        <Page>
            <div className={contactStyles}>
                <ContactContentWrapper />
            </div>
        </Page>
    )
}