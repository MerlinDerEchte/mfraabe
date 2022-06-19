import react from 'react'


// maybe this needs to be splitted for desktop and mobile ==> seperation of concerns
export const GlobalContext = react.createContext({
    isInit: true,
    isStart: false,
    isRun: false,
    screenWidth: 0,
    screenHeight: 0,
    isMobile: false,
    initApp: ()=> {},
    isShowMobileMenu: false,
    isShowMobileMenuAnimation: false,
    isHideMobileMenuAnimation:false,
    handleToggleMobileMenu: () => {},

});
