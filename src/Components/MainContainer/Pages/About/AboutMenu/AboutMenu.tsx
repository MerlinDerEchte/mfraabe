import styled from '@emotion/styled';
import react from 'react';
import { AboutMenuStyles } from './AboutMenuStyles';
import { AboutMenuItem } from './AboutMenuItem/AboutMenuItem';
import { EAboutTypes } from '../../../../../Types/EAboutTypes';


export const AboutMenu:react.FC<{}> = () => {

    const StyledWizzardMenu = styled.div(AboutMenuStyles);

    return(
        <StyledWizzardMenu id ='wizzardMenu'>
            <AboutMenuItem title={EAboutTypes.ABOUT_ME} index={0} />
     
        </StyledWizzardMenu>
    )
} 
