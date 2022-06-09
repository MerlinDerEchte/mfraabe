import { EAboutTypes } from "../../../../Types/EAboutTypes";

export const getIsSelected = (aboutType:EAboutTypes, selectedAboutType:EAboutTypes):boolean => {
    return selectedAboutType === aboutType
}   

export const getIsSelectedAndDeselecting = (aboutType:EAboutTypes, selectedAboutType:EAboutTypes, isDeselecting:boolean):boolean => {
    return getIsSelected(aboutType,selectedAboutType) && isDeselecting;
}

export const getIsOtherDeselecting = (aboutType:EAboutTypes, selectedAboutType:EAboutTypes, isDeselecting:boolean):boolean => {
    return !getIsSelected(aboutType,selectedAboutType) && isDeselecting;
}

export const getIsOneAboutTypeSelected = (aboutType:EAboutTypes):boolean => {
    return aboutType !== EAboutTypes.NONE;
}

export const getIsNoAboutTypeSelected = (selectedAboutType:EAboutTypes) => {
    return selectedAboutType === EAboutTypes.NONE;
}

export const getIsOneItemHover = (menuItemHover:EAboutTypes) => {
    return menuItemHover !== EAboutTypes.NONE
}

export const getIsLightShining = (mouseY:number, bottomThreshold:number, isOneSelected:boolean) => {
    return mouseY < bottomThreshold && !isOneSelected;
}