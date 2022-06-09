import react, {useContext} from 'react';
import { css } from '@emotion/css';
import { WizzardWrapperStyles, createRightArmStyles, createMagicwandStyles } from './WizzardSvgStyles';
import { MousePositionContext } from '../MousePositionContext';
// #11ff11
export const WizzardSVG:react.FC<{}> = () =>{

    const wrapperClass = css(WizzardWrapperStyles);
    const {mousePositions} = useContext(MousePositionContext);
    const rightArmStyles = createRightArmStyles(mousePositions.mouseY);
    const magicwandStyles = createMagicwandStyles(mousePositions.mouseY);
    
    return(
         <div className={wrapperClass}> 
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox='-100 0 300 400' >
                <g className={magicwandStyles}>
                    <path d="m42.57,235.24l-3.24,-113.44c-5.15,-0.26 -22.53,-10.62 -26.64,-15.82c-4.11,-5.2 -13.13,-11.38 -11.5,-19.94c1.63,-8.56 12.31,-23.74 11.89,-17.3l-4.96,22.45c4.57,-0.08 7.52,11.38 13.5,12.54c5.98,1.15 10.46,-16.03 6.15,-28.24c-4.31,-12.21 10.52,8.28 9,13.06c-1.52,4.78 -7.81,13.63 -6.7,18.49c1.11,4.87 6.57,5.11 9.85,7.67c0.65,-13.53 0.72,-86.96 0.72,-86.96c0,0 -12.09,-18.66 -12.09,-18.66c0,0 -11.78,3.71 -12.87,7.26l13.65,6.19c-0.15,5.81 6.89,4.83 -3.04,19.55l-0.85,-8.99c-0.57,-8.99 -2.46,-12.7 -15.63,-9.98c-13.18,2.72 7.63,35.32 -3.13,24.74c-10.74,-10.57 -2.85,-32.53 -1.54,-34.67c1.3,-2.14 30.81,-12.17 30.81,-12.17c0,0 12.76,21.08 12.76,21.08c0,0 1.35,44.59 1.35,44.59c0,0 -0.96,193.72 1.76,204.03l-9.26,-35.45l0,-0.02z" id="svg_29"/>
                </g>

                <g className={rightArmStyles}>
                    <ellipse cx="22.08" cy="131.11"  rx="14" ry="13.18" />
                    <path d="m1.06,17.88c-1.78,-19.04 38.05,-25.25 38.94,-1.22l1.35,106.87c1.78,9.78 -39.4,11.4 -38.94,1.39l-1.35,-107.06l0,0.02z" />
                </g>

                <g id="wizzard-body">
                    <path d="m18.22,60.3l12.5,-59.3c0,0 57.58,0 57.58,0l14.94,58.33c7.65,7.87 -84.97,8.97 -85.02,0.97z" id="svg_10"/>
                    <path d="m30.33,188l66.56,0.51c9.15,-6.8 6.33,-32.31 3.83,-45.51l-30.38,-0.61l0,7.55c-1.02,16.96 -13.31,11.61 -36.03,14.07c-22.74,2.47 -26.79,19.23 -18.94,23.97l14.96,0.02z" id="svg_5"/>
                    <path d="m119.06,162.18l-118.06,-1.87l20.43,-79.6l74.93,0.93l22.7,80.55z" id="svg_6"/>
                    <g id="svg_21">
                        <path d="m12.39,82.71l89.63,0.82c9.65,0.28 7.89,-21.31 -0.39,-22.68c-30.03,-0.41 -58.45,-1.24 -88.47,-1.65l-0.76,23.51z" id="svg_9"/>
                        <ellipse cx="12.87" cy="70.97" id="svg_19" rx="4.89" ry="12.16"/>
                    </g>
                </g>

                <g id="left-arm">
                    <ellipse cx="22.08" cy="131.11" id="svg_16" rx="14" ry="13.18"/>
                    <path d="m1.06,17.88c-1.78,-19.04 38.05,-25.25 38.94,-1.22l1.35,106.87c1.78,9.78 -39.4,11.4 -38.94,1.39l-1.35,-107.06l0,0.02z" id="svg_12"/>
                </g>

                <g id="head">
                    <ellipse cx="101.82" cy="125.69" id="svg_13" rx="38.33" ry="49.49"/>
                    <path d="m126.94,117.31c0,1.19 -20.4,11.89 -20.4,11.89c0,0 -19.03,3.56 -19.03,3.56c0,0 -13.59,-4.75 -13.59,-4.75c0,0 -3.81,9.4 -9.24,-5.44l-4.09,2.13l4.09,47.99l4.09,-9.52c5.44,25.57 -5.72,32.66 -5.72,32.66c0,0 9.52,-2.38 9.52,-2.38c0,0 2.72,47.59 2.72,47.59c0,0 11.42,-42 13.59,-42.82c2.17,-0.82 -11.96,10.34 0,9.52c11.96,-0.82 15.76,-40.25 40.77,-50.97" id="svg_4"/>
                    <path d="m66.06,93.85c0,0 40.09,73.85 40.09,73.85c0,0 14.59,-14.42 14.59,-14.42c0,0 10.94,32.43 10.94,32.43c0,0 7.59,72.63 16.29,67.27c8.7,-5.36 7.52,-71.49 3.72,-78.09c-3.81,-6.6 19.59,81.72 17.13,9.62c-2.46,-72.1 -37.12,-96.07 -37.12,-96.07c0,0 -65.62,5.41 -65.62,5.41l-0.02,0z" id="svg_27"/>
                    <ellipse cx="98.84" cy="107.95" id="svg_14" rx="97.84" ry="9.07"/>
                    <path d="m60.25,103.83c1.02,-13.66 26.83,-101.58 40.59,-102.82c13.76,-1.24 41.14,83.3 47.83,98.97c6.7,15.67 -89.45,17.5 -88.43,3.84z" id="svg_15"/>
                </g>
            </svg>

        </div>
    
    )
}