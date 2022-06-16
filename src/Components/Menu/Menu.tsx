import { EPaths } from '../../constants/paths';
import {MenuItem} from './MenuItem/MenuItem'
export const Menu = () => {

    return(
        <nav>
          <MenuItem path={EPaths.DEVELOPMENT} index={0} />
          <MenuItem path={EPaths.ABOUT} index={1} />
          <MenuItem path={EPaths.CONTACT} index={2} />
        </nav>
    )
} 