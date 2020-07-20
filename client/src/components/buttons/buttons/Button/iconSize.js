/**
 * @param {String} - natural language for the size of a button
 *                  ? accepts => 'tiny', 'small', 'medium', 'large', 'huge', 
 */
export default function iconSize(buttonSize){
    switch(buttonSize){
        case 'tiny':    
        case 'xx-small':
        case 'x-small': 
        case 'small':   
        case 'medium':  
        case 'large':   
        case 'x-large': 
        case 'xx-large':
        case 'huge':    
        default: 
            console.warn('ButtonSize not recognised! setting to default of tiny (8px)');
            return { maxWidth:'8px', maxHeight:'8px' };
    }
}