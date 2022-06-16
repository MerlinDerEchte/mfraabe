import react, {MouseEvent, useContext, useState} from 'react';
import { createAboutMainStyles } from './AboutDesktopStyles';
import { IPosition } from '../../../../../Types/IPosition';
import { AboutMenu } from './Components/AboutMenu/AboutMenu';
import { MousePositionContext } from './MousePositionContext';
import { WizzardSVG } from './Components/Wizzard/WizzardSvg';
import { Lightball } from './Components/Lightball/Lightball';
import { Page } from '../../Page';
import { EAboutType } from './EAboutType';
import { AboutContext } from './AboutContext';
import { ABOUT_ANIMATION_CONSTANTS } from './AboutConstants';
import { AboutContentWrapper } from './Components/AboutContent/AboutContentWrapper';
import { getIsOneAboutTypeSelected, getIsSelected } from './AboutUtils';
import { GlobalContext } from '../../../../../GlobalContext';
import { AboutCancel } from './Components/AboutCancel/AboutCancel';

export const AboutDesktop:react.FC<{}> = () => {
    const [mousePositions, setMousePositions] = useState({
        mouseX:1000,
        mouseY:1000
    })
    const [isMouseOver, setIsMouseOver] = useState(false);
    
    const [selectedAboutType, setSelectedAboutType] = useState(EAboutType.NONE);
    const [isSelecting, setIsSelecting] = useState(false);
    const [isSwitching, setIsSwitching] = useState(false);
    const [isDeselecting, setIsDeselecting] = useState(false);


    const getAboutMainOffset = ():IPosition => {
        const aboutMainWrapper = document.getElementById('AboutMainContainer');
        const aboutMainOffsetX = aboutMainWrapper?.getBoundingClientRect().left || 0;
        const aboutMainOffsetY = aboutMainWrapper?.getBoundingClientRect().top || 0;     
        const aboutMainOffset:IPosition = {
            mouseX: aboutMainOffsetX,
            mouseY: aboutMainOffsetY
        }
        return aboutMainOffset;
    }
    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        if(isSelecting){
            return;
        } 
        const aboutMainOffset = getAboutMainOffset();
        const aboutMainContainter = document.getElementById('AboutMainContainer');
        const innerTreshold = 30;

        const minValueX = 0;
        const width = aboutMainContainter?.getBoundingClientRect().width || 0;
        const height = aboutMainContainter?.getBoundingClientRect().height || 0;
        const maxValueX = minValueX + width;
        const minValueY =  0;
        const maxValueY = minValueY + height;
       
  
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const mousePositions:IPosition = {
            mouseX,
            mouseY,
        };
        setMousePositions(
            getRelativeMousePositions(mousePositions, aboutMainOffset)
        );
        if(
            mousePositions.mouseX > maxValueX - innerTreshold ||
            mousePositions.mouseX < minValueX + innerTreshold ||
            mousePositions.mouseY > maxValueY - innerTreshold ||
            mousePositions.mouseX < minValueY + innerTreshold 
            )
        {
            setIsMouseOver(false)
        }else{
            setIsMouseOver(true)
        }
    }

    const getRelativeMousePositions = (mousePositions:IPosition,offset:any) => {

        return {
            mouseX: mousePositions.mouseX -  offset.mouseX,
            mouseY: mousePositions.mouseY - offset.mouseY

        }
    }
    function selectAboutTypeFromUnselected(aboutType: EAboutType):Promise<void> {
        return new Promise(
            resolve =>{
                setIsSelecting(true);
                setTimeout(() => {
                    setIsSelecting(false);
                    setSelectedAboutType(aboutType);
                    resolve();
                },
                    ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_LIGHT +
                    ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT_BORDER +
                    ABOUT_ANIMATION_CONSTANTS.ACTIVATION_ANIMATION_TIME_CONTENT + 
                    ABOUT_ANIMATION_CONSTANTS.ACTIVATION_STATUS_SET_DELAY
                )
            }
        );
             
    }
   
    

    function handleDeselectAboutType():Promise<void>{
       
        return new Promise(
            resolve => {
                setIsDeselecting(true);
                setTimeout(() => {
                    setIsDeselecting(false);
                    setSelectedAboutType(EAboutType.NONE);
                    resolve();
                },
                ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANTIMATION_TIME_CONTENT +
                ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_CONTENT_BORDER +
                ABOUT_ANIMATION_CONSTANTS.DEACTIVATION_ANIMATION_TIME_LIGHT 
                );
            }
        )      
    }

    function switchSelectedAboutType(aboutType:EAboutType):Promise<void>{
        return new Promise(
            resolve => {
                setIsSwitching(true);
                setTimeout(()=> {
                    setIsSwitching(false);
                    setSelectedAboutType(aboutType);
                    resolve()
                },
                ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_OUT +
                ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_BORDER_OUT +
                ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_BORDER_IN +
                ABOUT_ANIMATION_CONSTANTS.SWITCHING_ANIMATION_TIME_CONTENT_IN                
                
                )
            }
        )
    }

    async function handleSelectAboutType(aboutType:EAboutType){

        if(selectedAboutType === EAboutType.NONE){
            selectAboutTypeFromUnselected(aboutType);
        }
        if(getIsOneAboutTypeSelected(selectedAboutType) && !getIsSelected(aboutType, selectedAboutType)){
            switchSelectedAboutType(aboutType);           
        }
        
    }

    const MousePositionContextValue = {
        mousePositions,
        isMouseOver
    }
    const AboutContextValue = ({
        selectedAboutType,
        handleSelectAboutType,
        handleDeselectAboutType,
        isSelecting,
        isDeselecting,
        isSwitching
    })
    
    const { isInit, isStart, screenWidth } = useContext(GlobalContext)
    const aboutStyles = createAboutMainStyles({isInit, isStart, screenWidth});

    
    return(
        <Page>
            <div className={aboutStyles} id="AboutMainContainer" onMouseOver={handleMouseOver}>
                <AboutContext.Provider value={AboutContextValue} >
                <MousePositionContext.Provider value={MousePositionContextValue}>
                    <AboutMenu />
                    <WizzardSVG />
                    <Lightball />
                    <AboutContentWrapper />
                    <AboutCancel />
                </MousePositionContext.Provider>
                </AboutContext.Provider>
            </div>
        </Page>
    )
}