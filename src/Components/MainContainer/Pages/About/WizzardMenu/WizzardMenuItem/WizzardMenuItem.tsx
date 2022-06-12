import styled from '@emotion/styled';
import react, { MouseEvent, useContext } from 'react';
import { EAboutTypes } from '../../../../../../Types/EAboutTypes';
import { AboutContext } from '../../AboutContext';
import { getIsSelected } from '../../AboutUtils';
import { createWizzardItemStyles } from './WizzardMenuItemStyles';

export const WizzardMenuItem:react.FC<{title:EAboutTypes,index:number}> = ({title,index}) => {

    const { selectedAboutType, handleSelectAboutType } = useContext(AboutContext);

    const isSelected = getIsSelected(title,selectedAboutType );
    const itemStyles = createWizzardItemStyles( index );
    
    const StyledItem = styled.div(itemStyles);
    const handleClick = (e:MouseEvent<HTMLDivElement>)=> {
        e.stopPropagation();
        handleSelectAboutType(title)
    }
    return(
        <StyledItem 
            onMouseOver={e => e.stopPropagation()}
            onPointerDown={handleClick}>
            {title}
        </StyledItem>
    )
}