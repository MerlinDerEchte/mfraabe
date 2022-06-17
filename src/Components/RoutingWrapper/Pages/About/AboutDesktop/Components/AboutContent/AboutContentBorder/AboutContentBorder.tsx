import react, { useContext } from 'react';
import { Directions } from '../../../../../../../../constants/Directions';
import { GlobalContext } from '../../../../../../../GlobalContext';
import { AboutContext } from '../../../AboutContext';
import { getIsOneAboutTypeSelected } from '../../../AboutUtils';
import { createAboutContentBorderStyles } from './AboutContentBorderStyles';

const AboutContentBorder: react.FC<{direction:Directions}> = ({direction}) => {

    const {selectedAboutType, isSelecting, isDeselecting, isSwitching} = useContext(AboutContext);
    const { screenHeight } = useContext(GlobalContext);
    const isOneSelected = getIsOneAboutTypeSelected(selectedAboutType);
    const styles = createAboutContentBorderStyles({direction, isOneSelected, isSelecting, isDeselecting, isSwitching, screenHeight});
    
    return(
        <div className={styles} ></div>
    )
}

export const AboutContentBorderTop: react.FC<{}> = () => {

    return <AboutContentBorder direction={Directions.TOP} />
}
export const AboutContentBorderRight: react.FC<{}> = () => {

    return <AboutContentBorder direction={Directions.RIGHT} />
}
export const AboutContentBorderBottom: react.FC<{}> = () => {

    return <AboutContentBorder direction={Directions.BOTTOM} />
}
export const AboutContentBorderLeft: react.FC<{}> = () => {

    return <AboutContentBorder direction={Directions.LEFT} />
}