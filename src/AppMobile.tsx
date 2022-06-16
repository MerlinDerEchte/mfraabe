import { appStylesMobile } from "./AppStylesMobile"
import { CompanyLogo } from "./Components/CompanyLogo/CompanyLogo"
import { Menu } from "./Components/Menu/Menu"
import { MobileInMaintenance } from "./Components/MobileInMaintenance"
import { RoutingWrapper } from "./Components/RoutingWrapper/RoutingWrapper"


export const AppMobile = () => {

    return(
        <div className={appStylesMobile}>
            <MobileInMaintenance />
        </div>
    )
}