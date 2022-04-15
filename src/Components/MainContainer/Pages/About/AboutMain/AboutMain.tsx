import styled from '@emotion/styled';
import react from 'react';
import { AboutMainStyles } from './AboutMainStyles';
import { WizzardSVG } from './Wizzard/WizzardSvg';


export const AboutMain:react.FC<{}> = () => {

    const StyledAboutMain = styled.div(AboutMainStyles) 
    return(
        <StyledAboutMain>
            <WizzardSVG />
        </StyledAboutMain>
    )
}