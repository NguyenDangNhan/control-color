import {combineReducers} from 'redux';
import font from './font'
import color from './color'
const myreducer = combineReducers({
    font:font,
    Color:color
 })
export default myreducer;