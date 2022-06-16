import react, { useContext } from 'react';
import { useLocation } from 'react-router';
import { EPaths } from '../../../constants/paths';
import { GlobalContext } from '../../../GlobalContext';
import { createSloganLetterStyles } from './SloganLetterStyles';
import { createMobileSloganLetterStyles } from './SloganLetterStylesMobile';

export interface ESloganLetter {
    index:number,
    title:string,
    isSpace?:boolean,
}

export const SloganLetter:react.FC<ESloganLetter> = ({index,title, isSpace = false}) => {

    const { isInit, isStart, isMobile } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = location.pathname === EPaths.NONE;
    const letterStyles = createSloganLetterStyles({index, isInit, isStart,isSpace,isInitialPath});
    const letterStylesMobile = createMobileSloganLetterStyles({index, isInit, isStart,isSpace,isInitialPath})
    return(
        <div className={isMobile ? letterStylesMobile :  letterStyles} >
            {title}
        </div>
    )
}