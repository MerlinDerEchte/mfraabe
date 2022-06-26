import react, { useContext } from 'react';
import { createAboutCancelStyles } from './AboutCancelStyles';
import { EAboutType } from '../../EAboutType';
import { AboutContext } from '../../AboutContext';

export const AboutCancel:react.FC<{}> = () => {

    const {selectedAboutType, isSelecting, isDeselecting, handleDeselectAboutType} = useContext(AboutContext);
    const isOneSelected = selectedAboutType !== EAboutType.NONE;
    const aboutCancelStyles = createAboutCancelStyles({isOneSelected, isSelecting, isDeselecting});

    const handleDeselectOnClick = (e:React.MouseEvent) => {
        e.stopPropagation();
        handleDeselectAboutType();
    }
    return(
        <div className={aboutCancelStyles} onClick={handleDeselectOnClick}>
            <div className="xBackground"></div>
            <div className="xForeground"></div>
        </div>
    )   
}