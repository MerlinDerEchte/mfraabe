import react, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';
import { getIsInitialPath } from '../../../utils/getIsInitialPath';
import { getSloganInitTotalHeight, getSloganRunTotalHeight } from '../Utils';
import { createCompanySloganStyles } from './SloganStyles';
import { SloganRow } from './SloganRow/SloganRow';
import { SloganLetter } from './SloganLetter/SloganLetter';
import { SloganUnderline } from './SloganUnderline/SloganUnterline';

export const Slogan:react.FC<{}> = () => {
    const {isInit, isStart } = useContext(GlobalContext);
    const location = useLocation();
    const isInitialPath = getIsInitialPath(location.pathname);

    const sloganInitTotalHeight = getSloganInitTotalHeight();
    const sloganRunTotalHeight = getSloganRunTotalHeight();

    const sloganStyles = createCompanySloganStyles({isInit, isStart, isInitialPath,sloganInitTotalHeight, sloganRunTotalHeight });

    return(
        <div className={sloganStyles}>
            <SloganRow>
                <SloganLetter title="W" index={0}></SloganLetter>
                <SloganLetter title="e" index={1}></SloganLetter>
                <SloganLetter title="b" index={2} isSpace></SloganLetter>
                <SloganLetter title='&' index={3} isSpace></SloganLetter>         
                <SloganLetter title='S' index={4} ></SloganLetter>
                <SloganLetter title="c" index={5}></SloganLetter>
                <SloganLetter title="r" index={6}></SloganLetter>
                <SloganLetter title="i" index={7}></SloganLetter>
                <SloganLetter title="p" index={8}></SloganLetter>
                <SloganLetter title="t" index={9}></SloganLetter>
            </SloganRow>
            <SloganRow>
                <SloganLetter title="D" index={10}></SloganLetter>
                <SloganLetter title="e" index={11}></SloganLetter>
                <SloganLetter title="v" index={12}></SloganLetter>
                <SloganLetter title="e" index={13}></SloganLetter>
                <SloganLetter title="l" index={14}></SloganLetter>
                <SloganLetter title="o" index={15}></SloganLetter>
                <SloganLetter title="p" index={16}></SloganLetter>
                <SloganLetter title="m" index={17}></SloganLetter>
                <SloganLetter title="e" index={18}></SloganLetter>
                <SloganLetter title="n" index={19}></SloganLetter>
                <SloganLetter title="t" index={20}></SloganLetter>
            </SloganRow>
            <SloganUnderline />
        </div>
    )
}