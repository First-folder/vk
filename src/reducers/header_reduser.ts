import React from 'react'
const HEADER_TITLE_READ = "HEADER_TITLE_READ";



let initialize ={
    title:"my script"
}
type InitializeType = typeof initialize;

const headerReducer = (state = initialize,action:any):InitializeType =>{
    switch(action.type){
        case HEADER_TITLE_READ:
            return{
               ...state 
            }
        default : return state    

    }
}
export let testHeaderAC  = ()=>({type:"789"})

export default  headerReducer;