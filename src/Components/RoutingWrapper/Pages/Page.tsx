import react, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { pageStyles } from './PageStyles';
import { createMobilePageStyles } from './PageStylesMobile';

export const Page:react.FC<{children:any}> = ({children}) => {
    const { isInit, isStart, isRun,isMobile, screenWidth, screenHeight } = useContext(GlobalContext);
    
    if( isMobile ){
        const mobilePageStyles = createMobilePageStyles({isInit, isStart, isRun, screenHeight, screenWidth})
        return <div className={mobilePageStyles}>
             {children}
        </div>
    }
    return(
        <div className={pageStyles}>
            {children}
        </div>
    )
}