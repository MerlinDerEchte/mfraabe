import styled from '@emotion/styled';
import react,{ useContext } from 'react';
import { GlobalContext } from '../../../../../../GlobalContext';
import { createDevelopmentCardStyles }from './DevelopmentCardStyles/DevelopmentCardStyles';
import { DevelopmentContext } from '../DevelopmentContext';
import { EDevelopmentType } from '../../../EDevelopmentType';
import { getIsOneDevelopmentTypeSelected, getIsOtherDeselecting, getIsSelected, getIsSelectedAndDeselecting } from '../DevelopmentUtils';
import React from 'react';

export const DevelopmentCard:react.FC<{developmentType:EDevelopmentType,index:number, children:any}> = ({developmentType,index,children}) => {

    const { isInit, isStart, isRun} = useContext(GlobalContext);
    const { selectedDevelopmentType, handleSelectDevelopmentType, isSelecting, isDeselecting} = useContext(DevelopmentContext);

    const isOneSelected = getIsOneDevelopmentTypeSelected(selectedDevelopmentType);
    const isSelected = getIsSelected(developmentType, selectedDevelopmentType);
    const isSelectedAndDeselecting = getIsSelectedAndDeselecting(developmentType, selectedDevelopmentType,isDeselecting);
    const isOtherSelectedAndDeselecting = getIsOtherDeselecting(developmentType, selectedDevelopmentType, isDeselecting);
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
        handleSelectDevelopmentType(developmentType);
    }
    return(
        <StyledDevelopmentCard onClick={handleClick} onMouseOver={handleMouseOver}> 
            <div className='serviceCardTitle'>
                <span>{developmentType}</span>
                <div className='serviceCardTitleUnderline'></div>
            </div>
            <div className='serviceCardContent'>
                {children
                }
            </div>
        </StyledDevelopmentCard>
    );
};