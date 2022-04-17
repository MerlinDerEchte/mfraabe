import styled from '@emotion/styled';
import react,{Children, useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../../../../../../../GlobalContext';
import {createServiceCardStyles }from './ServiceCardStyles';
import { applicationStatus } from '../../../../../../../constants/ApplicationStatus';
import { ServiceContext } from '../../../ServiceContext';
import { EServiceType } from '../../../../../../../Types/EServiceType';
import { getIsOtherDeselecting, getIsSelected, getIsSelectedAndDeselecting } from '../../../ServiceUtils';

export const ServiceCardComponent:react.FC<{service:EServiceType,index:number, children:any}> = ({service,index,children}) => {
    
    

    const { isInit, isStart, isRun} = useContext(GlobalContext);
    const { selectedService, setSelectedService, isDeselecting} = useContext(ServiceContext);

    const isOneSelected = selectedService !== EServiceType.NONE;
    const isSelected = getIsSelected(service, selectedService);
    const isSelectedAndDeselecting = getIsSelectedAndDeselecting(service, selectedService,isDeselecting);
    const isOtherSelectedAndDeselecting = getIsOtherDeselecting(service, selectedService, isDeselecting);
    const serviceCardStyles = createServiceCardStyles( index, isInit, isStart, isRun, isSelected, isOneSelected,isSelectedAndDeselecting, isOtherSelectedAndDeselecting );
    const StyledServiceCard = styled.div(serviceCardStyles);
   
    const handleMouseOver = (event: React.MouseEvent) => {
        if(isSelected){
            event.preventDefault();
        }
        event.stopPropagation();       
    }
    return(
        <StyledServiceCard onClick={e =>  setSelectedService(service)} onMouseOver={handleMouseOver}> 
            <div className='serviceCardTitle'>
                <span>{service}</span>
                <div className='serviceCardTitleUnderline'></div>
            </div>
            <div className='serviceCardContent'>
                {children
                }
            </div>
        </StyledServiceCard>
    );
};