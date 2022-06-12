import react,{ useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { mainContainerStyles } from './MainContainerStyles';
import { EPaths } from '../../constants/paths';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Services } from './Pages/Development/Services';
import { Route,Routes } from 'react-router-dom';

export const MainContainer:react.FC = () => {

    const { isInit } = useContext(GlobalContext);
  
    return(
        <>
        {!isInit && 
            <div className={mainContainerStyles} >
                <Routes>
                    <Route path={EPaths.NONE} element={<div></div>}/>
                    <Route path={EPaths.SERVICES } element = {<Services/>} />    
                    <Route path={EPaths.ABOUT } element = {<About />} />
                    <Route path={EPaths.CONTACT } element = {<Contact />} />
                </Routes>
               
            </div>
        }
        </>
    )
}