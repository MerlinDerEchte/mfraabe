import styled from '@emotion/styled';
import react, { useContext } from 'react';
import { useLocation } from 'react-router';
import { applicationStatus } from '../../../constants/ApplicationStatus';
import { EPaths } from '../../../constants/paths';
import { GlobalContext } from '../../../GlobalContext';
import { createSloganLetterStyles } from './SloganLetterStyles';



export const SloganLetter:react.FC<{index:number, title:string, isSpace?:boolean}> = ({index,title, isSpace = false}) => {

    const { appStatus, isInit, isStart } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = location.pathname === EPaths.NONE;
    const letterStyles = createSloganLetterStyles(index, isInit, isStart,isSpace,isInitialPath);
    const StyledSloganLetter = styled.div(letterStyles)
    return(
        <StyledSloganLetter >
            {title}
        </StyledSloganLetter>
    )
}