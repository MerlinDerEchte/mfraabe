import react from 'react';
import { EDevelopmentType } from '../../EDevelopmentType';

export const DevelopmentContext = react.createContext({
    selectedDevelopmentType:EDevelopmentType.NONE,
    handleSelectDevelopmentType: (service:EDevelopmentType) => {},
    handleDeselectDevelopmentType:(service:EDevelopmentType) => {},
    isSelecting: false,
    isDeselecting: false,
});