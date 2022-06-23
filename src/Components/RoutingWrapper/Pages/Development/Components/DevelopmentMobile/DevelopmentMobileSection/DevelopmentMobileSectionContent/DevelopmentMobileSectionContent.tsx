import react, { useContext } from 'react';
import { GlobalContext } from '../../../../../../../GlobalContext';
import { EDevelopmentType } from '../../../../EDevelopmentType';
import { mapDevelopmentTypeToTemplate } from '../../../Shared/DevelopmentUtils';
import { DevelopmentMobileContext } from '../../DevelopmentMobileContext';
import { createMobileDevelopmentSectionContentStyles } from './DevelopmentMobileSectionContentStyles';



export const DevelopmentMobileSectionContent:react.FC<{developmentType:EDevelopmentType}> = ({developmentType}) => {
 

    const developmentSectionStyles = createMobileDevelopmentSectionContentStyles();
    const developmentSectionContent = mapDevelopmentTypeToTemplate(developmentType);
    return(
        <div className={developmentSectionStyles}>
            { developmentSectionContent }
        </div>
    )
}