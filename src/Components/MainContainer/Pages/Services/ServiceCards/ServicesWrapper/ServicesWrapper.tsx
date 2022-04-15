import react, { Children } from 'react';
import { ServiceCardWrapperStyles } from './ServicesWrapperStyles';
import styled from '@emotion/styled';



export const ServicesWrapper:react.FC<{children:any}> = ({children}) => {

    const StyledServicesWrapper = styled.div( ServiceCardWrapperStyles )
    return(
        <StyledServicesWrapper>
            {children}
        </StyledServicesWrapper>
    )
}