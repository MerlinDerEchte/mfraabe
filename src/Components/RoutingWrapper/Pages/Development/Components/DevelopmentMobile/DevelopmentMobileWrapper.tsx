import react from 'react';
import { EDevelopmentType } from '../../EDevelopmentType';
import { DevelopmentMobileSection } from './DevelopmentMobileSection/DevelopmentMobileSection';
import { developmentMobileWrapperStyles } from './DevelopmentMobileWrapperStyles';

export const DevelopmentMobileWrapper:react.FC<{}> = () =>{

  
    return(
        <div className={developmentMobileWrapperStyles}>
            <DevelopmentMobileSection developmentType={EDevelopmentType.PROFESSIONAL}/>
            <DevelopmentMobileSection developmentType={EDevelopmentType.SOLO} />
            <DevelopmentMobileSection developmentType={EDevelopmentType.RECOMMENDATIONS} />
        </div>
    )
}