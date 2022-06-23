import styled from '@emotion/styled';
import react, { useContext } from 'react';
import { EDevelopmentType } from '../../../EDevelopmentType';
import { DevelopmentContext } from '../DevelopmentContext';
import { createServiceDeselectStyles } from './DevelopmentCancelStyles';

export const DevelopmentCancel:react.FC<{}> = () => {

    const { selectedDevelopmentType ,isSelecting, isDeselecting, handleDeselectDevelopmentType} = useContext(DevelopmentContext);
    const isOneSelected = selectedDevelopmentType !== EDevelopmentType.NONE;
    const serviceDeselectStyles = createServiceDeselectStyles(isOneSelected, isSelecting, isDeselecting);
    const  StyledServiceDeselect = styled.div(serviceDeselectStyles); 
    const handleDeselectOnClick = (e:React.MouseEvent) => {
        e.stopPropagation();
        handleDeselectDevelopmentType(selectedDevelopmentType);
    }
    return(
        <StyledServiceDeselect onClick={handleDeselectOnClick}>
            <div className="xBackground"></div>
            <div className="xForeground"></div>
        </StyledServiceDeselect>
    )   
}