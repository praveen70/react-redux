import {FECTH_WEATHER} from '../actions/index'

const initialState = {
    data: [],
    
    
    };
export default function (state= initialState, action={}){
    switch(action.type){
        case FECTH_WEATHER:
        console.log("from reducers:::no increment",action.payload.data)
        if(action.payload && action.payload.data){
            
            return {...state ,data:action.payload.data };
        }
        return state;


        default:
            return state;
    }
    
    
   
}