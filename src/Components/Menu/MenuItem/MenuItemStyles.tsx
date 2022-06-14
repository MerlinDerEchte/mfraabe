import { css, keyframes } from '@emotion/react';
import { colors } from '../../../constants/css/colors';
import { MENU_INIT_ANIMATION_DELAY } from '../../../constants/timings';

const MENU_ITEM_WIDTH= 150;
const MENU_ITEM_HEIGHT= 50;
const MENU_ITEM_GAP_Y= 50;
const MENU_ITEM_GAP_X= 50;

const MENU_MID_START_POSITION_TOP = `max(calc(100vh - 200px), 80vh)`;
const MENU_MID_START_POSITION_LEFT =  `calc((100vw - 3 * ${MENU_ITEM_WIDTH}px - 2 * ${MENU_ITEM_GAP_X}px) / 2)`;

const MENU_LEFT_START_POSITION_TOP = 150
const MENU_LEFT_START_POSITION_LEFT = 50;


export const createMenuItemStyle:any = (
    index:number,
    isInit:boolean,
    isStart:boolean,
    isSelected:boolean,
    isStartPath:boolean) => {
    
   
    const menuItemAnimation = createMenuItemAnimation(index,isInit, isStart,isSelected);

    const MENU_ITEM_LEFT_TOP =  `calc(${MENU_LEFT_START_POSITION_TOP}px + ${index} * (${MENU_ITEM_HEIGHT}px + ${MENU_ITEM_GAP_X}px))`;
    const MENU_ITEM_START_LEFT = `calc(${MENU_MID_START_POSITION_LEFT} + ${index} * ( ${MENU_ITEM_WIDTH}px + ${MENU_ITEM_GAP_Y}px ))`;

    return(
        css({
            display: 'flex',
            lineHeight: '30px',
            justifyContent:'center',
            alignItems:'start',
            position: 'absolute',
            zIndex: 10,
            top: isInit && isStartPath ? MENU_MID_START_POSITION_TOP: MENU_ITEM_LEFT_TOP,
            left:  isInit && isStartPath ? MENU_ITEM_START_LEFT : `${MENU_LEFT_START_POSITION_LEFT}px`,
            fontSize: 30,
            fontWeight: 50,
            width: MENU_ITEM_WIDTH,
            color: colors.DARKWHITE,
            height: MENU_ITEM_HEIGHT,
            animation: menuItemAnimation,
            
            'a':{
                boxShadow: isSelected ?  `0px 5px 0px -3px  ${colors.LIGHTORANGE}`: '',
            },

            '&:hover':{
                
                'a':{
                    boxShadow: !isSelected ?  `0px 5px 0px -3px  ${colors.LIGHTORANGE}`: '',
                    cursor: 'pointer', 
                }                
            },
            

        })
    );
};
const createMenuItemAnimation = (index:number,isInit:boolean, isStart:boolean,isSelected:boolean) => {
    if(isInit){
        return `${MenuItemInitAnimation} 0.2s ${MENU_INIT_ANIMATION_DELAY}  backwards`;
    } 
    if(isStart){
        const MENU_ITEM_LEFT_LEFT =  `calc(${MENU_LEFT_START_POSITION_TOP}px + ${index} * (${MENU_ITEM_HEIGHT}px + ${MENU_ITEM_GAP_X}px))`;
        const MENU_ITEM_START_LEFT = `calc(${MENU_MID_START_POSITION_LEFT} + ${index} * ( ${MENU_ITEM_WIDTH}px + ${MENU_ITEM_GAP_Y}px ))`;
        return `${createMenuItemStartAnimation(MENU_MID_START_POSITION_TOP.toString(), MENU_ITEM_START_LEFT.toString(), MENU_ITEM_LEFT_LEFT.toString(), MENU_LEFT_START_POSITION_LEFT.toString())} .3s ease-in-out ${0.05 + index * 0.05}s backwards`
    }
    return ''
}

function createMenuItemStartAnimation(topStartPosition:string, leftStartPosition:string,topEndPosition:string, leftEndPosition:string ):any{

    const animation = keyframes`
        0%{
            top:${topStartPosition}; left: ${leftStartPosition};
        }
        50%{
            top:calc(50vh + 50px): left: ${leftStartPosition}};
        }
        100%{
            top:${topEndPosition}; left: ${leftEndPosition}px;
        }

    `
    return animation;
}
const MenuItemInitAnimation = keyframes`
    from{
        opacity:0;
        transform: translateY(-30);
    }
    to{
        opacity:1;
        transform: translateY(0);
    }
`
