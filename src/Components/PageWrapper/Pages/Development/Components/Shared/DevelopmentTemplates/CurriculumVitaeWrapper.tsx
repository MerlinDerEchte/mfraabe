import { css } from '@emotion/css';
import react from 'react';
import { colors } from '../../../../../../../constants/css/colors';
import { DocumentIcon } from '../DevelopmentIconsSvg/DocumentIcon';

const cvWrapperStyles = css({
    width: '100%',
    height: 80,
    display: 'flex',
    justifyContent:'start',
    marginLeft: 30,
    cursor: 'pointer',
    'svg':{
        height:80,
        widht:80,
        fill: colors.LIGHTORANGE
    }
})



export const CurriculumVitaeWrapper:react.FC<{}> = () => {

    return(
        <div className={cvWrapperStyles}>
            <a href="/images/Merlin_Raabe_CV_2022.pdf" download="Merlin_Raabe_CV_2022">
            <DocumentIcon />
            </a>
        </div>  
    )
}