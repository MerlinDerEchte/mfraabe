import { mobileScreenWidth } from "../constants/distances"
export const isMobile = (screenWidth:number) => {
    return(screenWidth < mobileScreenWidth )
} 