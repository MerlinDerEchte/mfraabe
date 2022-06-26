import react, { useContext } from 'react';
import { EDevelopmentType } from '../../../../EDevelopmentType';
import { mapDevelopmentTypeToSVG } from '../../../Shared/DevelopmentUtils';
import { DevelopmentMobileContext } from '../../DevelopmentMobileContext';
import { developmentHeaderStyles } from './DevelopmentMobileSectionHeaderStyles';



export const DevelopmentMobileSectionHeader:react.FC<{developmentType:EDevelopmentType}> = ({developmentType}) => {

    const { handleDevelopmentSectionClick } = useContext(DevelopmentMobileContext);
    const svgComponent = mapDevelopmentTypeToSVG(developmentType)
    return(
        <div className={developmentHeaderStyles} onClick={e => handleDevelopmentSectionClick(developmentType)}>
            <h1>{developmentType}</h1>
            <div className="svgWrapper">
                {svgComponent}
            </div>
        </div>
    )
}