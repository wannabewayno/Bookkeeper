import React from 'react';
import buttonSize from './buttonSize.js';
import buttonPosition from './buttonPosition.js';
import iconSize from './iconSize';
import { baseStyle, textStyle ,getSkin } from './styles/style.js';
import getIcon from './icons';
import onHover from '../../../../events/onHover/index.jsx';
import onActive from '../../../../events/onActive/index.jsx';
import './styles/clearFocus.css';


function Button({ size='tiny', position='', color='', icon='', skin='default', type='button', style={}, children}){

    const { normalStyle, hoverStyle, activeStyle } = getSkin(skin,color);

    const buttonStyle = { ...baseStyle, ...buttonSize(size), ...buttonPosition(position), ...normalStyle, ...style };

    return (
        <button {...onHover(hoverStyle)} {...onActive(activeStyle)} style={buttonStyle} type={type}>
            {children?<span style={textStyle}>{children}</span>:null}
            {icon!==''?<img src={getIcon}></img>:null}
        </button>
    )
}

export default Button;


