import styled from '@emotion/styled';
import react, { useContext } from 'react';
import { EDevelopmentType } from '../../EDevelopmentType';
import { DevelopmentContext } from '../../DevelopmentContext';
import { createServiceDeselectStyles } from './DevelopmentCancelStyles';

export const DevelopmentCancel:react.FC<{}> = () => {

    const {selectedService,isSelecting, isDeselecting, handleDeselectService} = useContext(DevelopmentContext);
    const isOneSelected = selectedService !== EDevelopmentType.NONE;
    const serviceDeselectStyles = createServiceDeselectStyles(isOneSelected, isSelecting, isDeselecting);
    const  StyledServiceDeselect = styled.div(serviceDeselectStyles); 
    const handleDeselectOnClick = (e:React.MouseEvent) => {
        e.stopPropagation();
        handleDeselectService(selectedService);
    }
    return(
        <StyledServiceDeselect onClick={handleDeselectOnClick}>
            <div className="xBackground"></div>
            <div className="xForeground"></div>
        </StyledServiceDeselect>
    )   
}