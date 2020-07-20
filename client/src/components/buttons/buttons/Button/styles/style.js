import defaultStyle from './default.js'


export const baseStyle = {
    width:'fit-content',
    height:'fit-content',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'0.5rem',
    padding:'0.5em 0.75em',
    borderWidth:'0.1em',
    fontSize:'100%',
    backgroundColor: 'transparent',
    color: 'rgb(26,116,88)',
    borderStyle:'solid',
    borderColor:'rgb(26,116,88)',
    borderRadius: '5px',
    objectPosition: 'center',
}

export const textStyle = {
    fontSize:'inherit',
    whiteSpace:'nowrap',
}

export function getSkin(skin,color,backgroundColor){
    if(color === '') color = 'rgb(125,125,125)'
    switch(skin){
        case'default': return defaultStyle(color);
    }
}

