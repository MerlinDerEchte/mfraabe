import react from 'react'
import { applicationStatus } from './constants/ApplicationStatus';
import { EPaths } from './constants/paths';

export const GlobalContext = react.createContext({
    activePath: EPaths.NONE,
    appStatus: applicationStatus.INIT,
    isInit: true,
    isStart: false,
    isRun: false,
    setFirstPath: (path:EPaths) => {} 
})
