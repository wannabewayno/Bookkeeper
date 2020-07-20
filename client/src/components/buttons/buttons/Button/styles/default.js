import destructureColour from '../../../../../lib/destructureColour.js';

export default function defaultStyle(colourString) {
    
    const colour = destructureColour(colourString);
    const baseColour = colour.toString();

    const normalStyle = {
        color:baseColour,
        borderColor:baseColour
    }

    const hoverStyle = {
        color:'#FFF',
        backgroundColor:baseColour
    }

    const activeStyle = {
        outline:'none',
        transform:'scale(0.95)'
    }

    return { normalStyle, hoverStyle, activeStyle }
}

