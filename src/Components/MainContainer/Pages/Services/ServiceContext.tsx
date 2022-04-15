import react from 'react';
import { EServiceType } from '../../../../Types/EServiceType';

export const ServiceContext = react.createContext({
    selectedService:EServiceType.NONE,
    setSelectedService: (service:EServiceType) => {},
    deselectService:(service:EServiceType) => {},
    isDeselecting: false,
});