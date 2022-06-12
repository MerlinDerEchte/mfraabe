import react, { useState } from 'react';
import { Page } from '../Page';

import { ServiceCards } from './DevelopmentContent/ServicesComponent';
import { ServiceContext } from './ServiceContext';
import { EServiceType } from '../../../../Types/EServiceType';
import { getIsSelected } from './ServiceUtils';
import { totalDeselectionAnimationTime } from '../../../../constants/timings';

export const Services:react.FC<{}> = () => {

    const [selectedService, setSelectedService] = useState(EServiceType.NONE); 
    const [isDeselecting, setIsDeselecting] = useState(false);

    const deselectService = (service:EServiceType) => {
        if(getIsSelected(service, selectedService)){
            setIsDeselecting(true);
            setTimeout(()=> {
                setIsDeselecting(false);
                setSelectedService(EServiceType.NONE);
            },totalDeselectionAnimationTime)
        }
    }
    const value= ({selectedService, setSelectedService, deselectService,isDeselecting})
    return(
        <>
        <Page>
            <ServiceContext.Provider value={value}>
                <ServiceCards />
            </ServiceContext.Provider>
        </Page>
        </>
    )
}