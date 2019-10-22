import {createStore} from 'redux'
let instate={
    status: false
}
let myReducer=(state=instate,action)=>{
           return state;
}
const store=createStore(myReducer)
 console.log(store)
 