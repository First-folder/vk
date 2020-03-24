import { AppStateType } from './redux_store';
import { ThunkAction } from 'redux-thunk';
import React from 'react';
import { ProfileApi } from '../dal/dal';

const  PHOTOS_SET_USER_WALL_PHOTOS = 'PHOTOS_SET_USER_WALL_PHOTOS';
let initialize = {
    wall: {         
        items:[] as Array<ItemsPhotosType> 
    },
    frofile:{

    }
}
type LikesType={
    user_likes:number
    count:number
}
type RepostsType={
    count:number
}
type CommentsType = {
    count:number
}
type TagsType={
    count:number
}
export type ItemsPhotosType = {
    id:number
    album_id:number
    owner_id:number
    sizes:Array<any>
    text:string
    date:number
    likes:LikesType
    reposts:RepostsType
    comments:CommentsType
    can_comment:number
    tags:TagsType
}
type WallType = {     
    items:Array<ItemsPhotosType>
}
type ProfileType = {

}
type InitializeType = typeof initialize;
type ActionType = PhotosSetPhotosUserWellACType;

let photosReducer = (state = initialize,action:ActionType):InitializeType=>{
    switch(action.type){
        case PHOTOS_SET_USER_WALL_PHOTOS:
            return{
                ...state, wall:{
                    items:action.wall.items                  
                }  
            }
        default : return  state   
    }
}
type PhotosSetPhotosUserWellACType = {
    type: typeof PHOTOS_SET_USER_WALL_PHOTOS
    wall:WallType
}
const  photosSetPhotosUserWellAC=(wall:WallType):PhotosSetPhotosUserWellACType=>({type:PHOTOS_SET_USER_WALL_PHOTOS,wall});

type ThunkType = ThunkAction<Promise<void>,AppStateType,{},ActionType>
export let photosGetPhotosUserWellThunk = (id_user:number):ThunkType=> async (dispatch)=>{
    let result = await ProfileApi.getUserPhotos(id_user);
    dispatch(photosSetPhotosUserWellAC(result))
    console.log("photosSetPhotosUserWellAC");
    console.log(result);
}
export default photosReducer; 
