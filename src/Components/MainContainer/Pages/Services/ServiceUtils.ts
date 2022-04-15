import { EServiceType } from "../../../../Types/EServiceType";

export const getIsSelected = (service:EServiceType, selectedService:EServiceType):boolean => {
    return selectedService === service
}   

export const getIsSelectedAndDeselecting = (service:EServiceType, selectedService:EServiceType, isDeselecting:boolean):boolean => {
    return getIsSelected(service,selectedService) && isDeselecting;
}

export const getIsOtherDeselecting = (service:EServiceType, selectedService:EServiceType, isDeselecting:boolean):boolean => {
    return !getIsSelected(service,selectedService) && isDeselecting;
}

export const getIsNoServiceSelected = (selectedService:EServiceType) => {
    return selectedService === EServiceType.NONE;
}