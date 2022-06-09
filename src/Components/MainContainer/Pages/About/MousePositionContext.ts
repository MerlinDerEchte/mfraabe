import react from 'react';

export const MousePositionContext = react.createContext({
           mousePositions:{
            mouseX:0,
            mouseY:0 
           },          
           isMouseOver:false
})

