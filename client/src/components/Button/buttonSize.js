/**
 * @param {String} - natural language for the size of a button
 *                  ? accepts => 'tiny', 'small', 'medium', 'large', 'huge', 
 */
export default function buttonSize(buttonSize){
    switch(buttonSize){
        case 'tiny':
            return { maxWidth:'80px', };
        case 'small':
            return { maxWidth:'120px', };
        case 'medium':
            return { maxWidth:'160px', };
        case 'large':
            return { maxWidth:'240px', };
        case 'huge':
            return { maxWidth:'300px', };
        default: 
            console.error('ButtonSize not recognised! setting to default of tiny (8px)');
            return { maxWidth:'100px' };
    }
}