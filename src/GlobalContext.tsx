import react from 'react'

export const GlobalContext = react.createContext({
    isInit: true,
    isStart: false,
    isRun: false,
    screenWidth: 0,
    screenHeight: 0,
    isMobile: false,
    initApp: ()=> {},
    showMenu: true
})
