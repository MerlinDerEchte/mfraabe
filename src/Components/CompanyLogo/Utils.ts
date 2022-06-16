import { COMPANY_LOGO_CONSTANTS } from "./CompanyLogoConstants"

export const getSloganInitTotalHeight = ():number => {
    return(COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_GAP + 2 * COMPANY_LOGO_CONSTANTS.SLOGAN.INIT_ROW_HEIGHT )
}
export const getSloganRunTotalHeight = ():number => {
    return(COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_GAP + 2 * COMPANY_LOGO_CONSTANTS.SLOGAN.RUN_ROW_HEIGHT );
}