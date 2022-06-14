import { EDevelopmentTypes } from "../../../../Types/EDevelopmentTypes";

export const getIsSelected = (service:EDevelopmentTypes, selectedService:EDevelopmentTypes):boolean => {
    return selectedService === service
}   

export const getIsSelectedAndDeselecting = (service:EDevelopmentTypes, selectedService:EDevelopmentTypes, isDeselecting:boolean):boolean => {
    return getIsSelected(service,selectedService) && isDeselecting;
}

export const getIsOtherDeselecting = (service:EDevelopmentTypes, selectedService:EDevelopmentTypes, isDeselecting:boolean):boolean => {
    return !getIsSelected(service,selectedService) && isDeselecting;
}

export const getIsNoService = (selectedService:EDevelopmentTypes) => {
    return selectedService === EDevelopmentTypes.NONE;
}
export const getIsOneServiceSelected = (selectedService:EDevelopmentTypes) => {
    return(selectedService !== EDevelopmentTypes.NONE)
}