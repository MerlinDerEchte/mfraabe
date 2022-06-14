import { EPaths} from './paths';

export const getPathName = (path:EPaths):string => {
    if(path === EPaths.ABOUT){
        return 'About'
    };
    if(path === EPaths.CONTACT){
        return 'Contact Me';
    }
    if(path === EPaths.SERVICES){
        return 'Development'
    }
    return "";
}