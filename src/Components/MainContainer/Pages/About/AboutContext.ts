import react from 'react';
import { EAboutTypes } from '../../../../Types/EAboutTypes';

export const AboutContext = react.createContext({
    selectedAboutType:EAboutTypes.NONE,
    handleSelectAboutType: (service:EAboutTypes ) => {},
    isSelecting: false,
    isDeselecting: false,
    isSwitching: false
   });