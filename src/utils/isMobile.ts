import { mobileScreenWidth } from "../constants/distances"
export const getIsMobile = (screenWidth:number) => {
    return(screenWidth < mobileScreenWidth )
} 