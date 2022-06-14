import react from 'react';
import { EDevelopmentTypes } from '../../../../Types/EDevelopmentTypes';

export const ServiceContext = react.createContext({
    selectedService:EDevelopmentTypes.NONE,
    handleSelectService: (service:EDevelopmentTypes) => {},
    handleDeselectService:(service:EDevelopmentTypes) => {},
    isSelecting: false,
    isDeselecting: false,
});