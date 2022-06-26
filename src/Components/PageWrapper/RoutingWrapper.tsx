import react,{ useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { createRoutingWrapperStyles } from './RoutingWrapperStyles';
import { EPaths } from '../../constants/paths';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Development } from './Pages/Development/Development';
import { Route,Routes } from 'react-router-dom';

export const RoutingWrapper:react.FC = () => {

    const { isInit } = useContext(GlobalContext);
    const mainContainerStyles = createRoutingWrapperStyles();
    return(
        <>
        {!isInit && 
            <div className={mainContainerStyles} >
                <Routes>
                    <Route path={EPaths.NONE} element={<div></div>}/>
                    <Route path={EPaths.DEVELOPMENT } element = {<Development/>} />    
                    <Route path={EPaths.ABOUT } element = {<About />} />
                    <Route path={EPaths.CONTACT } element = {<Contact />} />
                </Routes>
               
            </div>
        }
        </>
    )
}