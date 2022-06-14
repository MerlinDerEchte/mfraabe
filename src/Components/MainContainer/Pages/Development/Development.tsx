import react, { useState } from 'react';
import { Page } from '../Page';
import { ServiceContext } from './DevelopmentContext';
import { EDevelopmentTypes } from '../../../../Types/EDevelopmentTypes';
import { getIsNoService, getIsSelected } from './DevelopmentUtils';
import { DEVELOPMENT_ANIMATION_TIMINGS } from './DevelopmentConstants';
import { DevelopmentWrapper } from './DevelopmentContent/DevelopmentWrapper/DevelopmentWrapper';

export const Development:react.FC<{}> = () => {

    const [selectedService, setSelectedService] = useState(EDevelopmentTypes.NONE); 
    const [isSelecting, setIsSelecting] = useState(false)
    const [isDeselecting, setIsDeselecting] = useState(false);

    const handleDeselectService = (service:EDevelopmentTypes) => {
        if(getIsSelected(service, selectedService)){
            setIsDeselecting(true);
            setTimeout(()=> {
                setIsDeselecting(false);
                setSelectedService(EDevelopmentTypes.NONE);
            },DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_DELAY + DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_TIME)
        }
    }
    const handleSelectService = (service:EDevelopmentTypes) => {
        if(getIsSelected(service, selectedService) || getIsNoService(service)){
            return;
        };
        setIsSelecting(true);
        setSelectedService(service);
        setTimeout(()=> {
            setIsSelecting(false);
        }, DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_DELAY +  DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_TIME);
    }

    const value= ({selectedService, handleSelectService, handleDeselectService, isSelecting, isDeselecting})
    return(
        <>
        <Page>
            <ServiceContext.Provider value={value}>
                <DevelopmentWrapper />
            </ServiceContext.Provider>
        </Page>
        </>
    )
}