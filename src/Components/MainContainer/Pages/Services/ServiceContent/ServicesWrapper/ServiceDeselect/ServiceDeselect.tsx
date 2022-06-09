import styled from '@emotion/styled';
import react, { useContext } from 'react';
import { EServiceType } from '../../../../../../../Types/EServiceType';
import { ServiceContext } from '../../../ServiceContext';
import { createServiceDeselectStyles } from './ServiceDeselectStyles';




export const ServiceDeselect:react.FC<{}> = ({}) => {

    const {selectedService, isDeselecting,deselectService} = useContext(ServiceContext);
    const isOneSelected = selectedService !== EServiceType.NONE;
    const serviceDeselectStyles = createServiceDeselectStyles(isOneSelected, isDeselecting);
    const  StyledServiceDeselect = styled.div(serviceDeselectStyles); 
    const handleDeselectOnClick = (e:React.MouseEvent) => {
        e.stopPropagation();
        deselectService(selectedService);
    }
    return(
        <StyledServiceDeselect onClick={handleDeselectOnClick}>
            <div className="xBackground"></div>
            <div className="xForeground"></div>
        </StyledServiceDeselect>
    )   
}