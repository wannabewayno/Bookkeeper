/**
 * @param {String} - natural language for the size of a button
 *                  ? accepts => 'tiny', 'small', 'medium', 'large', 'huge', 
 */
export default function iconSize(buttonSize){
    switch(buttonSize){
        case 'tiny':
            return { maxWidth:'8px', maxHeight:'8px' };
        case 'small':
            return { maxWidth:'14px', maxHeight:'14px' };
        case 'medium':
            return { maxWidth:'20px', maxHeight:'20px' };
        case 'large':
            return { maxWidth:'30px', maxHeight:'30px' };
        case 'huge':
            return { maxWidth:'60px', maxHeight:'60px' };
        default: 
            console.warn('ButtonSize not recognised! setting to default of tiny (8px)');
            return { maxWidth:'8px', maxHeight:'8px' };
    }
}