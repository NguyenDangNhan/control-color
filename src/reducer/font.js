import * as methods from '../constans/actionTypes'
let Color=methods.firstsize;
let myreducer=(state=Color,action)=>{
    switch(action.type)
    {
        case methods.setSize:
        {    state=action.color+1;
             return state;
        }
    
        case methods.subSize:
        {    state=action.color-1
             return state;    
        } 
    }
    return state;
}
export default myreducer;