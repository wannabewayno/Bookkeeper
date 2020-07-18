import React from 'react';
import './buttons.css';
import buttonSize from './iconSize';
import buttonPosition from './buttonPosition';
import iconSize from './iconSize';
import { baseStyle, getSkin } from './style';
import getIcon from './icons';
import onHover from '../onHover';
import onActive from '../onActive';

function Button({ size='tiny', position='', icon='', skin='nude-button', type='button', children}){

    const buttonStyle = { ...baseStyle,...buttonSize(size), ...buttonPosition(position), ...getSkin(skin) };

    return (
        <button {...onHover()} {...onActive()} style={buttonStyle} type={type}  >
            {children?<span>{children}</span>:null}
            {icon!==''?<img src={getIcon}></img>:null}
        </button>
    )
}

export default Button;


