import * as methods from '../constans/actionTypes'
let Color=methods.firstcolor;
let myreducer=(state=Color,action)=>{
    switch(action.type)
    { case methods.setcolor:
        {
            state=action.color;
            console.log(state)
            return state;
        }
        
    }
    return state;
}
export default myreducer;