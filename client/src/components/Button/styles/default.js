import destructureColour from '../../../lib/destrucutreColour.js';

export default function defaultStyle(colourString) {

    const baseColour = destructureColour(colourString);
    const transparentBaseColour = baseColour.setOpacity(15);

    const normalStyle = {
        backgroundColor:transparentBaseColour.toString(),
        borderColour:baseColour.toString()
    }

    const hoverStyle = {
        color:'#FFF',
        backgroundColor:baseColour.toString()
    }

    const activeStyle = {
        transform:'scale(0.95)'
    }

    return { baseStyle, hoverStyle, activeStyle }
}

