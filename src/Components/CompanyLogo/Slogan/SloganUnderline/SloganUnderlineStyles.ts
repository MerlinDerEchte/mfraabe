import { css, keyframes } from "@emotion/css";
import { colors } from "../../../../constants/css/colors";
import { ANIMATION_TIMINGS } from "../../../GlobalConstants";

export interface IcreateSloganUnderlineStyles {
    isInit:boolean,
    isInitialPath:boolean
}

const UnderlineInitAnimation = keyframes`
    0%{
        left: 50%;
        background-color: ${colors.LIGHTORANGE};
        bottom: 0;
        height: 0px;
        borderRadius: 5px;
        width: 0%;
    }
    100%{
        left: 0;
        background-color: ${colors.LIGHTORANGE},
        bottom: 0;
        height: 3px,
        borderRadius: 5px;
        width: 100%;
    }
`;
const createUnderlineAnimation = (isInit:boolean) => {
    if(isInit) return`${UnderlineInitAnimation} ${ANIMATION_TIMINGS.INIT_UNDERLINE_TIME}ms ${ANIMATION_TIMINGS.INIT_UNDERLINE_DELAY}ms ease-out backwards`;
    return '';
}
export const createSloganUnderlineStyles = (params:IcreateSloganUnderlineStyles)  => {
    const { isInit, isInitialPath } = params;
   
    return(
        css({
            flex: 0,
            position:'absolute',
            left:  isInit && isInitialPath  ? 0 : '5%',
            backgroundColor: colors.LIGHTORANGE,
            bottom: 0,
            height: 3,
            borderRadius: '5px',
            width: isInit && isInitialPath ? '100%' : '90%',
            animation: createUnderlineAnimation(isInit),
        })
    )
}

