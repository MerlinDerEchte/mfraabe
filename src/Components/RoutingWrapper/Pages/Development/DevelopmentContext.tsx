import react from 'react';
import { EDevelopmentType } from './EDevelopmentType';

export const ServiceContext = react.createContext({
    selectedService:EDevelopmentType.NONE,
    handleSelectService: (service:EDevelopmentType) => {},
    handleDeselectService:(service:EDevelopmentType) => {},
    isSelecting: false,
    isDeselecting: false,
});