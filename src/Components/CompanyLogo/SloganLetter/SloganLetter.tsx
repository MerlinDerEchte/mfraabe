import styled from '@emotion/styled';
import react, { useContext } from 'react';
import { applicationStatus } from '../../../constants/ApplicationStatus';
import { GlobalContext } from '../../../GlobalContext';
import { createSloganLetterStyles } from './SloganLetterStyles';



export const SloganLetter:react.FC<{index:number, title:string, isSpace?:boolean}> = ({index,title, isSpace = false}) => {

    const { appStatus } = useContext(GlobalContext);
    const isInit = appStatus === applicationStatus.INIT;
    const isStart = appStatus === applicationStatus.START;
    const letterStyles = createSloganLetterStyles(index, isInit, isStart,isSpace);
    const StyledSloganLetter = styled.div(letterStyles)
    return(
        <StyledSloganLetter >
            {title}
        </StyledSloganLetter>
    )
}