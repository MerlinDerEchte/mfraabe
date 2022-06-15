import react from 'react';
import { EAboutType } from './EAboutType';

export const AboutContext = react.createContext(
    {
    selectedAboutType:EAboutType.NONE,
    handleSelectAboutType: (service:EAboutType ) => {},
    handleDeselectAboutType: () => {},
    isSelecting: false,
    isDeselecting: false,
    isSwitching: false
   });