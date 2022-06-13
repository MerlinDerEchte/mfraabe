import react from 'react'
import { applicationStatus } from './constants/ApplicationStatus';
import { EPaths } from './constants/paths';

export const GlobalContext = react.createContext({
    activePath: EPaths.NONE,
    isInit: true,
    isStart: false,
    isRun: false,
    setFirstPath: (path:EPaths) => {},
    screenWidth: 0,
    screenHeight: 0
})
