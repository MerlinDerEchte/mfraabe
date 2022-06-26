import react from 'react';
import { EDevelopmentType } from '../../EDevelopmentType';
export const DevelopmentMobileContext = react.createContext({
    selectedDevelopmentType: EDevelopmentType.NONE,
    handleDevelopmentSectionClick: (developmentType:EDevelopmentType) => {},
    isSelecting: false,
    isDeselecting: false
    }
)