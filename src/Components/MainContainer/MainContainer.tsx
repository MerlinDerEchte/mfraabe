import react,{ useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { mainContainerStyles } from './MainContainerStyles';
import { mainPath } from '../../constants/paths';
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
                    <Route path='/' element={<div></div>}/>
                    <Route path={'/'+ mainPath.SERVICES } element = {<Services/>} />    
                    <Route path={'/'+ mainPath.ABOUT } element = {<About />} />
                    <Route path={'/'+ mainPath.CONTACT } element = {<Contact />} />
                </Routes>
               
            </div>
        }
        </>
    )
}