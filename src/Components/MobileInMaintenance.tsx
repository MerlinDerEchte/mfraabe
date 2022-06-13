import react from 'react';
import { css } from '@emotion/css';

const createMobileStyles = () => {
    return(
        css({
            width: '100%', 
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        })
    )
}

export const MobileInMaintenance:react.FC<{}> = () => {


    const mobileMaintenaceStyles = createMobileStyles();
    return(
        <div className={mobileMaintenaceStyles}>
            <div>The mobile page is currently not available</div>
        </div>
    )


}