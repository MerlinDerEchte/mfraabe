import react from 'react';
import { EAboutTypes } from '../../../../Types/EAboutTypes';

export const AboutContext = react.createContext({
    selectedAboutType:EAboutTypes.NONE,
    setSelectedAboutType: (service:EAboutTypes) => {},
    deselectAboutType:(service:EAboutTypes) => {},
    isDeselecting: false,
});