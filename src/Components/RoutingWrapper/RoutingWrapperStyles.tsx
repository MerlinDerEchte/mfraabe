import { css } from '@emotion/css';

export const createRoutingWrapperStyles = () => css({
    zIndex: 1,
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow:'hidden'
    })