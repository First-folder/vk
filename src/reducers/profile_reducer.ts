import React from 'react';
import { ProfileApi } from '../dal/dal';

const SET_PROFILE_USER_INFO = "SET_PROFILE_USER_INFO";
type  CountersType={
    albums:number
    videos:number
    audios:number
    photos:number
    notes:number
    friends:number
    groups:number
    online_friends:number
    mutual_friends:number
    user_videos:number
    followers:number
    page:number
}
type PersonalType = {
    religion_id:number
}
let initialize = {
     name: "",
     family:"",
     pantronymic:"",
     bdate:"",
     nickname:"",
     is_closed:false,
     can_access_closed:true,
     sex:0,
     country:{
         id:1 as number,
         title:"" as string
     },
     photo_200:"",
     mobile_phone:"",
     home_phone:"",
     site:"",
     status:"",
     verified:0,
     counters: {
        albums:0,
        videos:0,
        audios:0,
        photos:0,
        notes:0,
        friends:0,
        groups:0,
        online_friends:0,
        mutual_friends:0,
        user_videos:0,
        followers:0,
        page:0
     } as CountersType,
     career:[] as any,
     military:[] as any,
     personal:{} as PersonalType,
     music:"",
     books:"",
     schools:[] as any,



}
type InitializeType = typeof initialize;
export let profileR = (state = initialize,action:any):InitializeType =>{
    switch(action.type){
        case SET_PROFILE_USER_INFO:
            return{
                ...state, 
                         family:action.data.first_name, 
                          name:action.data.last_name,
                          is_closed: action.data.is_closed,
                          can_access_closed: action.data.can_access_closed,
                          sex: action.data.sex,
                          nickname:action.data.nickname,
                          bdate: action.data.bdate,
                          country:action.data.country,
                          photo_200:action.data.photo_200,
                          mobile_phone:action.data.mobile_phone,
                          home_phone:action.data.home_phone,
                          site:action.data.site,
                          status:action.data.status,
                          verified:action.data.verified,
                          counters:action.data.counters,
                          career: action.data.career,
                          military:action.data.military,
                          personal:action.data.personal,
                          music:action.data.music,
                          books:action.data.books,
                          schools:action.data.schools



            }
        default : return state    
    }

}
let setProfileUserInfoAC = (data:InitializeType)=>({type:SET_PROFILE_USER_INFO,data})
export let getProfileUserInfoThunk = ()=> async (dispatch:any)=>{
    let result = await ProfileApi.getUserInfo(571537978);
    dispatch(setProfileUserInfoAC(result[0]));
        console.log("out info profile");
        console.log(result);

}
export let getProfilePhotosUser= (id_user :number) => async(dispatch:any)=>{
    let result = await ProfileApi.getUserPhotos(id_user);
    console.log("out info getProfilePhotosUser");
    console.log(result);
}