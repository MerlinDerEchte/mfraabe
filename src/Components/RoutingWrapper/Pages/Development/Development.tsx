import react, { useState } from 'react';
import { Page } from '../Page';
import { DevelopmentContext } from './DevelopmentContext';
import { EDevelopmentType } from './EDevelopmentType';
import { getIsNoService, getIsSelected } from './DevelopmentUtils';
import { DEVELOPMENT_ANIMATION_TIMINGS } from './DevelopmentConstants';
import { DevelopmentWrapper } from './Components/DevelopmentWrapper';

export const Development:react.FC<{}> = () => {

    const [selectedService, setSelectedService] = useState(EDevelopmentType.NONE); 
    const [isSelecting, setIsSelecting] = useState(false)
    const [isDeselecting, setIsDeselecting] = useState(false);

    const handleDeselectService = (service:EDevelopmentType) => {
        if(getIsSelected(service, selectedService)){
            setIsDeselecting(true);
            setTimeout(()=> {
                setIsDeselecting(false);
                setSelectedService(EDevelopmentType.NONE);
            },DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_DELAY + DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_TIME)
        }
    }
    const handleSelectService = (service:EDevelopmentType) => {
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
            <DevelopmentContext.Provider value={value}>
                <DevelopmentWrapper />
            </DevelopmentContext.Provider>
        </Page>
        </>
    )
}