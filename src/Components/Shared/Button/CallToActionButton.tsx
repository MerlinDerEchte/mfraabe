import styled from '@emotion/styled';
import react from 'react';

import { callToActionButtonStyles } from './CallToActionButtonStyles';

export const CallToActionButton:react.FC<{title:string,callback:any}> = ({title,callback})=> {

    const StyledCallToActionButton = styled.button(callToActionButtonStyles);

    const handleOnClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        callback();
    }
    return(
        <StyledCallToActionButton onClick={handleOnClick} >
            {title}
        </StyledCallToActionButton>
    )
}