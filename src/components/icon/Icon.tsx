import React from 'react';
import sprite from '../../assets/images/icons-sprite.svg'

type props = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<props> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "100"} height={props.height || "100"}
             viewBox={props.viewBox || "0 0 110 110"} fill='none'>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    );
};