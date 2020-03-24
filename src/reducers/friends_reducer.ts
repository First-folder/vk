import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { FriendsApi } from './../dal/dal';

import { AppStateType } from './redux_store';


const FRIENDS_SET_FRIENDS = 'FRIENDS_SET_FRIENDS';
export type FriendsType = {
    id:number
    first_name:string
    last_name:string
    deactivated:string
    photo_100:string

}
let initialize = {
    count: 0,
    friends:[] as Array<FriendsType> 
}
type InitializeType = typeof initialize;

export  let friendsReducer = (state = initialize, action:ActionType):InitializeType=>{
    switch(action.type){
        case FRIENDS_SET_FRIENDS:
            return{
                ...state, friends:action.data.items , count:action.data.count
            }
        default : return   state 

    }
}
type ActionType = FriendsSetFriendsACType ;
type FriendsSetFriendsACType = {
    type: typeof FRIENDS_SET_FRIENDS
    data:{
        count:number
        items:Array<FriendsType>
    }
}
type FriendsThunkType = ThunkAction<Promise<void>,AppStateType,{},ActionType>

let friendsSetFriendsAC = (data:{count:number,items:Array<FriendsType>}):FriendsSetFriendsACType=>({type:FRIENDS_SET_FRIENDS,data})

export let FriendsGetFriendsThunk = (id_user = 571537978):FriendsThunkType=> async (dispatch)=>{
    let result = await FriendsApi.getFriedns(id_user);
   dispatch(friendsSetFriendsAC(result));
    console.log(result);

}