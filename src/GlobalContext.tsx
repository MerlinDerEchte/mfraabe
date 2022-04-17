import react from 'react'
import { applicationStatus } from './constants/ApplicationStatus';
import { mainPath } from './constants/paths';

export const GlobalContext = react.createContext({
    activePath: mainPath.NONE,
    appStatus: applicationStatus.INIT,
    isInit: true,
    isStart: false,
    isRun: false,
    setFirstPath: (path:mainPath) => {} 
})
