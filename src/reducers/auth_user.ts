import { AuthApi } from './../dal/dal';
import { AppStateType } from './redux_store';
import React from "react"
import { ThunkAction } from "redux-thunk";
const USER_GET_USER_INFO = "USER_GET_USER_INFO";

let initialize = {
    id          :null as number | null,
    name        :null as null | string,
    family      :null as null | string,
    pantronymic :null as null | string,
    status      :null as null | boolean,
    bdate       :null as null | string,
    photoAvatar:undefined as undefined  | string       
}
type InitializeType = typeof initialize;

export const AuthReducer = (state = initialize,action:ActionType):InitializeType=>{
    switch(action.type){
        case USER_GET_USER_INFO:
            return{
                ...state,id:         action.id, 
                         name:       action.name , 
                         family :    action.family,
                         pantronymic:action.pantronymic,
                         bdate:      action.bdate,
                         photoAvatar: action.photo_100
            }
        default : return state 
    }

}
type ActionType = SetUserInfoAuthType;
type SetUserInfoAuthType = {
    type : typeof USER_GET_USER_INFO
    id:number
    name:string
    family:string
    pantronymic:string
    bdate:string
    photo_100:string
}
type ThunkType = ThunkAction<Promise<void>,AppStateType,undefined,ActionType>
const setUserInfoAuth = (id:number,name:string,family:string,pantronymic:string,bdate:string,photo_100:string):SetUserInfoAuthType=>({type:USER_GET_USER_INFO,id,name,family,pantronymic,bdate,photo_100})

export let getUserThunkAC = (login:string,passw:string):ThunkType => async (dispatch) => {   
    let result = await AuthApi.getTest(login,passw);
    //  console.log(login+ " ---- "+passw);
     dispatch(setUserInfoAuth(result[0].id, result[0].last_name, result[0].first_name,"ty",result[0].bdate,result[0].photo_100));
    //  console.log(result);
}
