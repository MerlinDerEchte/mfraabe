import { COMPANY_LOGO_CONSTANTS } from "./CompanyLogoConstants"
import { MOBILE_COMPANY_LOGO_CONSTANTS } from "./CompanyLogoConstantsMobile";

export const getSloganInitTotalHeight = ():number => {
    return(COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_GAP + 2 * COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_ROW_HEIGHT )
}
export const getSloganRunTotalHeight = ():number => {
    return(COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_GAP + 2 * COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_ROW_HEIGHT );
}

export const getMobileSloganInitTotalHeight = ():number => {
    return(MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_GAP + 2 * MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_ROW_HEIGHT )
}
export const getMobileSloganRunTotalHeight = ():number => {
    return(MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_GAP + 2 * MOBILE_COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_ROW_HEIGHT );
}