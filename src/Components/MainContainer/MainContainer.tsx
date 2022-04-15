import react,{ useContext} from 'react';
import { GlobalContext } from '../../GlobalContext';
import { mainContainerStyles } from './MainContainerStyles';
import { Services } from './Pages/Services/Services';
import { applicationStatus } from '../../constants/ApplicationStatus';
import { mainPath } from '../../constants/paths';
import { About } from './Pages/About/About';
import { Project } from './Pages/Projects/Projects';
import { Contact } from './Pages/Contact/Contact';
import { Route,Routes } from 'react-router-dom';

export const MainContainer:react.FC = () => {

    const {appStatus, activePath} = useContext(GlobalContext);
    const isInit = appStatus === applicationStatus.INIT;
    const isServices = activePath === mainPath.SERVICES;
    const isAbout = activePath === mainPath.ABOUT;
    const isProjects = activePath === mainPath.PROJECTS;
    const isContact = activePath === mainPath.CONTACT;

    return(
        <>
        {!isInit && 
            <div className={mainContainerStyles}>
                <Routes>
                    <Route path={'/'+ mainPath.SERVICES } element={<Services/>} />    
                    <Route path={'/'+ mainPath.ABOUT } element ={<About />} />
                    <Route  path={'/'+ mainPath.PROJECTS } element = {<Project />} />
                    <Route path={'/'+ mainPath.CONTACT } element={<Contact />} />
                </Routes>
            </div>
        }
        </>
    )
}