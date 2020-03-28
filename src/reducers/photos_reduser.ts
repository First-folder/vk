import { AppStateType } from './redux_store';
import { ThunkAction } from 'redux-thunk';
import React from 'react';
import { ProfileApi } from '../dal/dal';

const  PHOTOS_SET_USER_WALL_PHOTOS = 'PHOTOS_SET_USER_WALL_PHOTOS';
const PHOTOS_SET_USER_PROFILE_PHOTOS ='PHOTOS_SET_USER_PROFILE_PHOTOS';
let initialize = {
    wall: {         
        items:[] as Array<ItemsPhotosType> 
    },
    profile:{
        items:[] as Array<ItemsPhotosType> 
    },
    albums:{
        items:[] as Array<ItemsPhotosType>
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
export type  SizesType={
    type:string
    url:string
    width:number
    height:number
}
export type ItemsPhotosType = {
    id:number
    album_id:number
    owner_id:number
    sizes:Array<SizesType>
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
type ActionType = PhotosSetPhotosUserWellACType | PhotosSetPhotosUserProfileACType;

let photosReducer = (state = initialize,action:ActionType):InitializeType=>{
    switch(action.type){
        case PHOTOS_SET_USER_WALL_PHOTOS:
            return{
                ...state, wall:{
                    items:action.wall.items                  
                }  
            }
         case  PHOTOS_SET_USER_PROFILE_PHOTOS:
             return{
               ...state, profile:{
                   items:action.profile.items
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
type  PhotosSetPhotosUserProfileACType ={
    type: typeof PHOTOS_SET_USER_PROFILE_PHOTOS
    profile:WallType
}
const  photosSetPhotosUserProfileAC=(profile:WallType):PhotosSetPhotosUserProfileACType=>({type:PHOTOS_SET_USER_PROFILE_PHOTOS,profile});

type ThunkType = ThunkAction<Promise<void>,AppStateType,{},ActionType>
export let photosGetPhotosUserWallThunk = (id_user:number):ThunkType=> async (dispatch)=>{
    let result = await ProfileApi.getWallPhotos (id_user);
    dispatch(photosSetPhotosUserWellAC(result))
    // console.log("photosSetPhotosUserWellAC");
    // console.log(result);
}
export let photoGetPhotosUserProfileThunk = (id_user:number):ThunkType =>  async (dispatch)=>{
    let result = await ProfileApi.getProfilePhotos(id_user);
    dispatch(photosSetPhotosUserProfileAC(result));
    console.log("photosSetPhotosUserPROFILeAC");
    console.log(result);
}
export let photoGetAlbumsThunk = (id_user:number):ThunkType => async (dispatch) =>{
    let result  = await ProfileApi.getAlbums(id_user)
//error result 
}
export let photoSetPhotoFileThunk = (file:any):ThunkType => async (dispatch)=>{
    let result = await ProfileApi.saveFile(file);
    console.log(result);

}
export default photosReducer; 
