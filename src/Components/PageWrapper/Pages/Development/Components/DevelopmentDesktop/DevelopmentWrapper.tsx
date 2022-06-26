import react, { useContext } from 'react';
import { createDevelopmentWrapperStyles } from './DevelopmentWrapperStyles';
import styled from '@emotion/styled';
import { EDevelopmentType } from '../../EDevelopmentType';
import { DevelopmentCard } from './DevelopmentCard/DevelopmentCard';
import { FreelancerIcon } from '../Shared/DevelopmentIconsSvg/FreelancerIcon';
import { MonitorIcon } from '../Shared/DevelopmentIconsSvg/MonitorIcon';
import { ScriptIcon } from '../Shared/DevelopmentIconsSvg/ScriptIcon';
import { DevelopmentContent } from './DevelopmentContent/DevelopmentContent';
import { DevelopmentCancel } from './DevelopmentCancel/DevelopmentCancel';
import { GlobalContext } from '../../../../../GlobalContext';
import { ProfessionalDevelopmentTemplate } from '../Shared/DevelopmentTemplates/ProfessionalDevelopmentTemplate';
import { RecommandationsDevelopmentTemplate } from '../Shared/DevelopmentTemplates/RecommandationsDevelopmentTemplate';
import { SoloDevelopmentTemplate } from '../Shared/DevelopmentTemplates/SoloDevelopmentTemplate';



export const DevelopmentWrapper:react.FC<{}> = () => {
    const { screenWidth } = useContext(GlobalContext);
    const StyledServicesWrapper = styled.div( createDevelopmentWrapperStyles(screenWidth) )
    return(
        <StyledServicesWrapper>
              <DevelopmentCard developmentType={EDevelopmentType.PROFESSIONAL} index={0}  >
                <FreelancerIcon />
            </DevelopmentCard>
            <DevelopmentCard  developmentType={EDevelopmentType.SOLO} index={1} >
                <MonitorIcon />
            </DevelopmentCard>
            <DevelopmentCard developmentType={EDevelopmentType.RECOMMENDATIONS} index={2} >
                  <ScriptIcon />
            </DevelopmentCard>
            <DevelopmentContent developmentType={EDevelopmentType.PROFESSIONAL}>
               <ProfessionalDevelopmentTemplate />
            </DevelopmentContent>
            <DevelopmentContent developmentType={EDevelopmentType.SOLO} >
               <SoloDevelopmentTemplate />
            </DevelopmentContent>
            <DevelopmentContent developmentType={EDevelopmentType.RECOMMENDATIONS} >
               <RecommandationsDevelopmentTemplate />
            </DevelopmentContent>
            <DevelopmentCancel />
        </StyledServicesWrapper>
    )
}