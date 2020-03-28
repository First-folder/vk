
import { AppStateType } from './redux_store';

//AUTH
export const first_name_user = (state:AppStateType) =>{return state.authR.name}
export const last_name_user  = (state:AppStateType)=>{return state.authR.family}
export const auth_id_user  = (state:AppStateType)=>{return state.authR.id}
export const bdate  = (state:AppStateType)=>{return state.authR.bdate}
export const photoAvatar = (state:AppStateType)=>{return state.authR.photoAvatar}


//PROFILE

export const prof_name = (state:AppStateType) => {return state.profileR.name}
export const prof_family = (state:AppStateType)=>{return state.profileR.family}
export const prof_pantronymic = (state:AppStateType)=>{return state.profileR.pantronymic}
export const prof_sex = (state:AppStateType)=>{return state.profileR.sex}
export const prof_nickname = (state:AppStateType)=>{return state.profileR.nickname}
export const prof_bdate = (state:AppStateType)=>{return state.profileR.bdate}
export const prof_photo_200 = (state:AppStateType)=>{return state.profileR.photo_200}
export const prof_mobile_phone = (state:AppStateType)=>{return state.profileR.mobile_phone}
export const prof_home_phone = (state:AppStateType)=>{return state.profileR.home_phone}
export const prof_site = (state:AppStateType)=>{return state.profileR.site}
export const prof_status = (state:AppStateType)=>{return state.profileR.status}
export const prof_verified = (state:AppStateType)=>{return state.profileR.verified}
export const prof_music = (state:AppStateType)=>{return state.profileR.music}
export const prof_books = (state:AppStateType)=>{return state.profileR.books}
export const propf_count_friends = (state:AppStateType)=>{return state.profileR.counters.friends}
export const propf_count_photos = (state:AppStateType)=>{return state.profileR.counters.photos}
export const propf_count_videos = (state:AppStateType)=>{return state.profileR.counters.videos}
export const propf_count_audios = (state:AppStateType)=>{return state.profileR.counters.audios}


//PHOTOS

export const photos_wall_profile = (state:AppStateType)=>{return state.photosR.wall.items}
export const photos_profile      = (state:AppStateType)=>{return state.photosR.profile.items}
export const photos_albums      = (state:AppStateType)=>{return state.photosR.albums.items}


//FRIENDS
export const friends_info_friends = (state:AppStateType)=>{return state.friendsR.friends}








