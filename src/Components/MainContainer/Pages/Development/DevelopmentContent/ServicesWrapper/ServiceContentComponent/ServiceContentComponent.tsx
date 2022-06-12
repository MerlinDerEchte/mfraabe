import react, {  useContext } from 'react';
import styled from '@emotion/styled';
import { EServiceType } from '../../../../../../../Types/EServiceType';
import { getServiceContentStyles } from './ServiceContentComponentStyles'; 
import { ServiceContext } from '../../../ServiceContext';
import { getIsOtherDeselecting, getIsSelected } from '../../../ServiceUtils';
import { getIsSelectedAndDeselecting } from '../../../ServiceUtils';

export const ServiceContentComponent:react.FC<{service:EServiceType,children:any}> = ({service, children}) => {

    const { selectedService,isDeselecting } = useContext(ServiceContext);
    const isSelected = getIsSelected(service,selectedService);
    const isSelectedAndDeselecting = getIsSelectedAndDeselecting(service, selectedService, isDeselecting);
    const isOtherSelectedAndDeselecting = getIsOtherDeselecting(service, selectedService, isDeselecting);
    const serviceContentStyles = getServiceContentStyles(isSelected, isSelectedAndDeselecting, isOtherSelectedAndDeselecting);
    const StyledServiceContentComponent = styled.div(serviceContentStyles);

    const handleServiceContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }
    return(
        <StyledServiceContentComponent onClick={handleServiceContentClick}>
            {children}
        </StyledServiceContentComponent>
    )
}