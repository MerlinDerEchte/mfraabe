import styled from '@emotion/styled';
import react from 'react';
import { WizzardMenuStyles } from './WizzardMenuStyles';
import { WizzardMenuItem } from './WizzardMenuItem/WizzardMenuItem';
import { EAboutTypes } from '../../../../../Types/EAboutTypes';


export const WizzardMenu:react.FC<{}> = () => {

    const StyledWizzardMenu = styled.div(WizzardMenuStyles);

    return(
        <StyledWizzardMenu id ='wizzardMenu'>
            <WizzardMenuItem title={EAboutTypes.ME} index={0} />
            <WizzardMenuItem title={EAboutTypes.CODING} index={1} />
            <WizzardMenuItem title={EAboutTypes.CV} index={2} />
        </StyledWizzardMenu>
    )
} 
