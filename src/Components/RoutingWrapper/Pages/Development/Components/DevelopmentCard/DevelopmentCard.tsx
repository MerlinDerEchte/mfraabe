import styled from '@emotion/styled';
import react,{ useContext } from 'react';
import { GlobalContext } from '../../../../../../GlobalContext';
import { createDevelopmentCardStyles }from './DevelopmentCardStyles/DevelopmentCardStyles';
import { DevelopmentContext } from '../../DevelopmentContext';
import { EDevelopmentType } from '../../EDevelopmentType';
import { getIsOneServiceSelected, getIsOtherDeselecting, getIsSelected, getIsSelectedAndDeselecting } from '../../DevelopmentUtils';
import React from 'react';

export const DevelopmentCard:react.FC<{service:EDevelopmentType,index:number, children:any}> = ({service,index,children}) => {

    const { isInit, isStart, isRun} = useContext(GlobalContext);
    const { selectedService, handleSelectService, isSelecting, isDeselecting} = useContext(DevelopmentContext);

    const isOneSelected = getIsOneServiceSelected(selectedService);
    const isSelected = getIsSelected(service, selectedService);
    const isSelectedAndDeselecting = getIsSelectedAndDeselecting(service, selectedService,isDeselecting);
    const isOtherSelectedAndDeselecting = getIsOtherDeselecting(service, selectedService, isDeselecting);
    const serviceCardStyles = createDevelopmentCardStyles({index, isInit, isStart, isRun, isSelected, isOneSelected, isSelecting, isSelectedAndDeselecting, isOtherSelectedAndDeselecting});
    const StyledDevelopmentCard = styled.div(serviceCardStyles);
   
    const handleMouseOver = (event: React.MouseEvent) => {
        if(isSelected){
            event.preventDefault();
        }
        event.stopPropagation();       
    }

    const handleClick = (event: React.MouseEvent) => {
        if(isOneSelected){
            event.stopPropagation();
            return;
        }
        handleSelectService(service);
    }
    return(
        <StyledDevelopmentCard onClick={handleClick} onMouseOver={handleMouseOver}> 
            <div className='serviceCardTitle'>
                <span>{service}</span>
                <div className='serviceCardTitleUnderline'></div>
            </div>
            <div className='serviceCardContent'>
                {children
                }
            </div>
        </StyledDevelopmentCard>
    );
};