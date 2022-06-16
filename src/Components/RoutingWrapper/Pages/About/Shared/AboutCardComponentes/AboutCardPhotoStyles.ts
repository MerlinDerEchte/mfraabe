import { css } from "@emotion/css";
export const createAboutCardPhotoStyles = () => {

    return(
        css(
            {
                borderRadius: '50%',
                height: ' 100%',
                width: '100%',
                overflow: 'hidden',
                'img':{
                    width: '100%',
                    height: '100%',
                    objectFit:'contain',
                }
            }
        )
    )
};