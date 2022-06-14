import react, {  useContext } from 'react';
import styled from '@emotion/styled';
import { EDevelopmentTypes } from '../../../../../../../Types/EDevelopmentTypes';
import { getDevelopmentContentStyles } from './DevelopmentContentStyles'; 
import { ServiceContext } from '../../../DevelopmentContext';
import { getIsOtherDeselecting, getIsSelected } from '../../../DevelopmentUtils';
import { getIsSelectedAndDeselecting } from '../../../DevelopmentUtils';
import { GlobalContext } from '../../../../../../../GlobalContext';

export const DevelopmentContent:react.FC<{service:EDevelopmentTypes,children:any}> = ({service, children}) => {

    const { selectedService, isSelecting, isDeselecting } = useContext(ServiceContext);
    const {screenHeight} = useContext(GlobalContext);
    const isSelected = getIsSelected(service,selectedService);
    const isSelectedAndDeselecting = getIsSelectedAndDeselecting(service, selectedService, isDeselecting);
    const isOtherSelectedAndDeselecting = getIsOtherDeselecting(service, selectedService, isDeselecting);
    const developmentContentStyley = getDevelopmentContentStyles(isSelected, isSelecting, isSelectedAndDeselecting, isOtherSelectedAndDeselecting, screenHeight);
    const StyledDevelopmentContent = styled.div(developmentContentStyley);

    const handleServiceContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }
    return(
        <StyledDevelopmentContent onClick={handleServiceContentClick}>
            {children}
        </StyledDevelopmentContent>
    )
}