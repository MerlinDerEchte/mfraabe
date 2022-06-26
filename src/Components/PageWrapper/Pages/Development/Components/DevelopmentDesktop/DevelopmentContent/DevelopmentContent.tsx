import react, {  useContext } from 'react';
import styled from '@emotion/styled';
import { EDevelopmentType } from '../../../EDevelopmentType';
import { getDevelopmentContentStyles } from './DevelopmentContentStyles'; 
import { DevelopmentContext } from '../DevelopmentContext';
import { getIsOtherDeselecting, getIsSelected } from '../DevelopmentUtils';
import { getIsSelectedAndDeselecting } from '../DevelopmentUtils';
import { GlobalContext } from '../../../../../../GlobalContext';

export const DevelopmentContent:react.FC<{developmentType:EDevelopmentType,children:any}> = ({developmentType, children}) => {

    const { selectedDevelopmentType, isSelecting, isDeselecting } = useContext(DevelopmentContext);
    const { screenHeight } = useContext(GlobalContext);
    const isSelected = getIsSelected(developmentType,selectedDevelopmentType);
    const isSelectedAndDeselecting = getIsSelectedAndDeselecting(developmentType, selectedDevelopmentType, isDeselecting);
    const isOtherSelectedAndDeselecting = getIsOtherDeselecting(developmentType, selectedDevelopmentType, isDeselecting);
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