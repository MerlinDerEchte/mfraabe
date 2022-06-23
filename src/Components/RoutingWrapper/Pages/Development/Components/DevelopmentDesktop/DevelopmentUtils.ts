import { EDevelopmentType } from "../../EDevelopmentType";

export const getIsSelected = (service:EDevelopmentType, selectedService:EDevelopmentType):boolean => {
    return selectedService === service
}   

export const getIsSelectedAndDeselecting = (service:EDevelopmentType, selectedService:EDevelopmentType, isDeselecting:boolean):boolean => {
    return getIsSelected(service,selectedService) && isDeselecting;
}

export const getIsOtherDeselecting = (service:EDevelopmentType, selectedService:EDevelopmentType, isDeselecting:boolean):boolean => {
    return !getIsSelected(service,selectedService) && isDeselecting;
}

export const getIsNoService = (selectedService:EDevelopmentType) => {
    return selectedService === EDevelopmentType.NONE;
}
export const getIsOneDevelopmentTypeSelected = (selectedService:EDevelopmentType) => {
    return(selectedService !== EDevelopmentType.NONE)
}