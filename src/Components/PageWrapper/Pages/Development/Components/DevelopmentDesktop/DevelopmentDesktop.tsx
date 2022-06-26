import react, { useState } from 'react';
import { Page } from '../../../Page';
import { DevelopmentContext } from './DevelopmentContext';
import { EDevelopmentType } from '../../EDevelopmentType';
import { getIsNoService, getIsSelected } from './DevelopmentUtils';
import { DEVELOPMENT_ANIMATION_TIMINGS } from './DevelopmentConstants';
import { DevelopmentWrapper } from './DevelopmentWrapper';

export const DevelopmentDesktop:react.FC<{}> = () => {

    const [selectedDevelopmentType, setSelectedDevelopmentType] = useState(EDevelopmentType.NONE); 
    const [isSelecting, setIsSelecting] = useState(false)
    const [isDeselecting, setIsDeselecting] = useState(false);

    const handleDeselectDevelopmentType = (developmentType:EDevelopmentType) => {
        if(getIsSelected(developmentType, selectedDevelopmentType)){
            setIsDeselecting(true);
            setTimeout(()=> {
                setIsDeselecting(false);
                setSelectedDevelopmentType(EDevelopmentType.NONE);
            },DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_DELAY + DEVELOPMENT_ANIMATION_TIMINGS.CARD_DESELECTION_TIME)
        }
    }
    const handleSelectDevelopmentType = (developmentType:EDevelopmentType) => {
        if(getIsSelected(developmentType, selectedDevelopmentType) || getIsNoService(developmentType)){
            return;
        };
        setIsSelecting(true);
        setSelectedDevelopmentType(developmentType);
        setTimeout(()=> {
            setIsSelecting(false);
        }, DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_DELAY +  DEVELOPMENT_ANIMATION_TIMINGS.CARD_SELECTION_TIME);
    }

    const value= ({selectedDevelopmentType, handleSelectDevelopmentType, handleDeselectDevelopmentType, isSelecting, isDeselecting})
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