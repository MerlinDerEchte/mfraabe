import { mainPath } from '../../constants/paths';
import {MenuItem} from './MenuItem/MenuItem'
export const Menu = () => {

    return(
        <nav>
          <MenuItem title={mainPath.SERVICES} index={0} />
          <MenuItem title={mainPath.ABOUT} index={1} />
          <MenuItem title={mainPath.CONTACT} index={2} />
        </nav>
    )
} 