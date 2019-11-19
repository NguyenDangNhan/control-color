import * as Type from '../constans/actionTypes'
export const setsize=(color)=>{
    return (
        {
            type: Type.setSize,
            color:color
        }
    )
}
export const subsize=(color)=>{
    return (
        {
            type: Type.subSize,
            color:color
        }
    )
}

export const setColor=(color)=>{
    return (
        {
            type:Type.setcolor,
            color:color
        }
    )
}