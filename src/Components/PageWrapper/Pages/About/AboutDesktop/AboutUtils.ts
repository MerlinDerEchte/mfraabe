import { EAboutType } from "./EAboutType";

export const getIsSelected = (aboutType:EAboutType, selectedAboutType:EAboutType):boolean => {
    return selectedAboutType === aboutType
}   

export const getIsSelectedAndDeselecting = (aboutType:EAboutType, selectedAboutType:EAboutType, isDeselecting:boolean):boolean => {
    return getIsSelected(aboutType,selectedAboutType) && isDeselecting;
}

export const getIsOtherDeselecting = (aboutType:EAboutType, selectedAboutType:EAboutType, isDeselecting:boolean):boolean => {
    return !getIsSelected(aboutType,selectedAboutType) && isDeselecting;
}

export const getIsOneAboutTypeSelected = (aboutType:EAboutType):boolean => {
    return aboutType !== EAboutType.NONE;
}

export const getIsNoAboutTypeSelected = (selectedAboutType:EAboutType) => {
    return selectedAboutType === EAboutType.NONE;
}

export const getIsOneItemHover = (menuItemHover:EAboutType) => {
    return menuItemHover !== EAboutType.NONE
}

export const getIsLightShining = (mouseY:number, bottomThreshold:number, isOneSelected:boolean) => {
    return mouseY < bottomThreshold && !isOneSelected;
}