import react, { useState } from 'react'
import { MOBILE_ANIMATION_TIMINGS } from '../../../../../GlobalConstantsMobile';
import { Page } from '../../../Page';
import { EDevelopmentType } from '../../EDevelopmentType';
import { DevelopmentContent } from '../DevelopmentDesktop/DevelopmentContent/DevelopmentContent';
import { getIsOneDevelopmentTypeSelected, getIsSelected } from '../DevelopmentDesktop/DevelopmentUtils';
import { mapDevelopmentTypeToTemplate } from '../Shared/DevelopmentUtils';
import { DevelopmentMobileContext } from './DevelopmentMobileContext';
import { DevelopmentMobileWrapper } from './DevelopmentMobileWrapper';


export const DevelopmentMobile:react.FC<{}> = () => {

    const [ selectedDevelopmentType, setSelectedDevelopmentType ] = useState(EDevelopmentType.NONE);
    const [ isSelecting, setIsSelecting ] = useState(false);
    const [ isDeselecting, setIsDeselecting ] = useState(false);

    const handleDevelopmentSectionClick = (developmentType:EDevelopmentType) => {

        if( getIsSelected(selectedDevelopmentType, developmentType)){
            handleDeselecetDevelopmentTyp();
        }else{
            handleSelectDevelopmentType(developmentType)
        }
    }

    const handleSelectDevelopmentType = (developmentType:EDevelopmentType) =>{
        setIsSelecting(true)
        const timeout = setTimeout(()=>{
            setIsSelecting(false)
            setSelectedDevelopmentType(developmentType);
            clearTimeout(timeout);
        }, MOBILE_ANIMATION_TIMINGS.DEVELOPMENT_CONTENT_SELECTION_TIME + 0.05)
        if( developmentType !== EDevelopmentType.NONE && !getIsSelected(selectedDevelopmentType, developmentType)){
            setSelectedDevelopmentType(developmentType)
        }
    }

    const handleDeselecetDevelopmentTyp = () => {
        if( selectedDevelopmentType !== EDevelopmentType.NONE){
            setSelectedDevelopmentType(EDevelopmentType.NONE)
        }
    }

    const mobileContextValue =({
        selectedDevelopmentType,
        handleDevelopmentSectionClick,
        isSelecting,
        isDeselecting
    });
    return(
        <DevelopmentMobileContext.Provider value= {mobileContextValue}>
            <Page >
                <DevelopmentMobileWrapper />
            </Page>
            
        </DevelopmentMobileContext.Provider>
    )
}