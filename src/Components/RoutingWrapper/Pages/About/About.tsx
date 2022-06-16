import react, { useContext } from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import { AboutDesktop } from './AboutDesktop/AboutDesktop';
import { AboutMobile } from './AboutMobile/AboutMobile';


export const About:react.FC<{}> = () => {
    const { isMobile } = useContext(GlobalContext)
    
    return(isMobile ?
            <AboutMobile />
            :
            <AboutDesktop />       
    )
}