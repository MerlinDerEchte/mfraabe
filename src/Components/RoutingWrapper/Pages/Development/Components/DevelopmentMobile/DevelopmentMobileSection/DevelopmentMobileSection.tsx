import react from 'react';
import { EDevelopmentType } from '../../../EDevelopmentType';
import { DevelopmentMobileSectionContent } from './DevelopmentMobileSectionContent/DevelopmentMobileSectionContent';
import { DevelopmentMobileSectionHeader } from './DevelopmentMobileSectionHeader/DevelopmentMobileSectionHeader';
import { developmentSectionMobileStyles } from './DevelpmentMobileSectionStyles';

export const DevelopmentMobileSection:react.FC<{developmentType:EDevelopmentType}> = ({developmentType}) => {
 
    return(
        <section id={`${developmentType}`} className={developmentSectionMobileStyles}>
            <DevelopmentMobileSectionHeader developmentType={developmentType} />
            <DevelopmentMobileSectionContent developmentType={developmentType} />
        </section>
    )
}