import styled from '@emotion/styled';
import react, { MouseEvent, useContext } from 'react';
import { EAboutType } from '../../../EAboutType';
import { AboutContext } from '../../../AboutContext';
import { createWizzardItemStyles } from './AboutMenuItemStyles';

export const AboutMenuItem:react.FC<{title:EAboutType,index:number}> = ({title,index}) => {

    const { handleSelectAboutType } = useContext(AboutContext);
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
           <p>{title}</p>
        </StyledItem>
    )
}