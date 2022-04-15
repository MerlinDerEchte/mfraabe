import react, { Children } from 'react';
import { pageStyles } from './PageStyles';

export const Page:react.FC<{children:any}> = ({children}) => {


    return(
        <div className={pageStyles}>
            {children}
        </div>
    )
}