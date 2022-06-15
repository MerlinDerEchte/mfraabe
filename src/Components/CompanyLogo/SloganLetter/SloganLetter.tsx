import styled from '@emotion/styled';
import react, { useContext } from 'react';
import { useLocation } from 'react-router';
import { EPaths } from '../../../constants/paths';
import { GlobalContext } from '../../../GlobalContext';
import { createSloganLetterStyles } from './SloganLetterStyles';

export interface ESloganLetter {
    index:number,
    title:string,
    isSpace?:boolean,
}

export const SloganLetter:react.FC<ESloganLetter> = ({index,title, isSpace = false}) => {

    const { isInit, isStart } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = location.pathname === EPaths.NONE;
    const letterStyles = createSloganLetterStyles({index, isInit, isStart,isSpace,isInitialPath});
    const StyledSloganLetter = styled.div(letterStyles)
    return(
        <StyledSloganLetter >
            {title}
        </StyledSloganLetter>
    )
}