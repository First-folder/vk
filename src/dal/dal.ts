import { auth_id_user } from './../reducers/SELECTORS';
import Axios from "axios-jsonp-pro";
import { getByTestId } from '@testing-library/react';
import axios from 'axios';
//https://oauth.vk.com/blank.html#access_token=fad8ff1ae762e37461bf56c369c0e17c7424b321a462428491b97361836a514530b2a7cb778d7c8cfc756&expires_in=0&user_id=571537978&state=123456
const dataApplication = {
    id_application:7356819,
    client_secret:'jOEvi0ZPokMhzrRjHQRa',
    service_key:'551625d2551625d2551625d2d45566644155516551625d20b7d4a8bc6a9f3eaf4f8c12b',
   

}

const  user_ids = "123";
const bdata="1";
const token = "2";
const fields = "3";

const  instance = axios.create({
    headers:{},
    withCredentials:true,
    baseURL:'https://api.vk.com/method/',
});
type Params_req={
    key:string   
    value:string | number
}
let getURL=(method:string,fields:Array<Params_req>)=>{
    const baseUrl = 'https://api.vk.com/method/';
    const token   = 'access_token=df5a86b4ca0073a5ac6866db257c182ab161e22f40f777661fe344e97a09d524876418b25926bfc8e0280';
    let params ="";  
    if (fields.length>0) {
        fields.forEach(p=>{            
            params +=p.key +'='+ p.value +'&'
        })
    }
    // console.log("params");
    // console.log(params);
    // console.log("fields");
    // console.log(fields);

    return baseUrl + method + params + token +'&v=5.103';
}
export const AuthApi ={
    getUserData(login:string,passw:string){
        const  user_id=571537978;
        const friends = 'photo_100';
        const access_token  = 'access_token=df5a86b4ca0073a5ac6866db257c182ab161e22f40f777661fe344e97a09d524876418b25926bfc8e0280'

        //  instance.get('users/'+user_id +friends + access_token).then(data=>{
        //      data.data
        //  })
        
    },
    getTest(login:string,passw:string){
      console.log( getURL('users.get?',[{key:'user_ids',value:571537978},{key:'fields',value:'bdate,photo_100'}]));
      //'https://api.vk.com/method/users.get?user_ids=571537978&fields=bdate,photo_100&access_token=fad8ff1ae762e37461bf56c369c0e17c7424b321a462428491b97361836a514530b2a7cb778d7c8cfc756&v=5.103'
     return   Axios.jsonp(getURL('users.get?',[{key:'user_ids',value:'571537978'},{key:'fields',value:'bdate,photo_100'}]))
        .then(response =>{            
            return response.response
        })
        .catch(function (error) {
          console.log(error);
        }); 
    },

}
export const ProfileApi = {
    getUserInfo(id_user:number){   
      console.log(getURL('users.get',[{key:'user_ids',value:id_user},
                                                {key:"fields",value:'photo_100'},
                                                  ])     );
        return Axios.jsonp(getURL('users.get?',[{key:'user_ids',value:id_user},
                                                {key:"fields",value:'bdate,photo_200,music,video,nickname,military,personal,schools,sex,site,status,verified,books,career,contacts,country,counters'},
                                                  ])).then(data=>{
                                                      console.log("getUserInfo getUserInfo")
            return data.response;
        })
    },
    getWallPhotos(id_user:number){
        console.log(getURL('photos.get?',[{key:'owner_id',value:-id_user},{key:'extended',value:1}]));
            return Axios.jsonp(getURL('photos.get?',[{key:'owner_id',value:id_user},{key:'extended',value:1},{key:'album_id',value:'wall'},{key:'count',value:7}])).then(data=>{
                console.log(data) ;
                return data.response
            })

    },
    getProfilePhotos(id_user:number){
        console.log(getURL('photos.get?',[{key:'owner_id',value:-id_user},{key:'extended',value:1}]));
            return Axios.jsonp(getURL('photos.get?',[{key:'owner_id',value:id_user},{key:'extended',value:1},{key:'album_id',value:'profile'},{key:'count',value:7}])).then(data=>{
                console.log(data) ;
                return data.response
            })

    },
    
    getAlbums(id_user:number){
        console.log("getURL");
        console.log(getURL('photos.get?',[{key:'owner_id',value:id_user}]));
        return Axios.jsonp(getURL('photos.getAll?',[{key:'owner_id',value:-id_user},{key:'no_service_albums',value:0}])).then(data=>{
            console.log("getAlbums");
            console.log(data)
        })
    },
    saveFile(file:any){
       console.log(getURL('photos.getWallUploadServer?',[{key:'album_id',value:271216556}]));
        return Axios.jsonp(getURL('photos.getWallUploadServer?',[{key:'album_id',value:271216556}])).then(data=>{
            console.log('data.response');
            console.log(data);
            return data
        })
    }
}
export const FriendsApi={
    getFriedns(id_user:number){
        return Axios.jsonp(getURL('friends.get?',[{key:"count",value:"20"},{key:"fields",value:"nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities"}])).then(data=>{
            console.log(data.response);
            return data.response
        })
    }
}
// bdate,photo_200,music,video,nickname,military,personal,schools,sex,site,status,verified,books,career,contacts,country
//https://api.vk.com/method/users.get?user_ids=571537978&fields=bdate&access_token=fad8ff1ae762e37461bf56c369c0e17c7424b321a462428491b97361836a514530b2a7cb778d7c8cfc756&v=5.103
//https://api.vk.com/method/users.get?user_ids=571537978&fields=bdate&access_token=533bacf01e11f55b536a565b57531ac114461ae8736d6506a3&v=5.103


//https://oauth.vk.com/blank.html#access_token=df5a86b4ca0073a5ac6866db257c182ab161e22f40f777661fe344e97a09d524876418b25926bfc8e0280&expires_in=0&user_id=571537978&state=123456


// setMusic(fileMusic){
//     const  formData  =  new FormData();
//     formData.append("image",fileMusic)
//     return instance.post('saveMelodyFile',formData,{ headers: {
//         'content-type': 'multipart/form-data'
//     }})
// },
// getMusic(){return instance.get('getMusicList')},

// setMusicPlayList(data){
  
//      const  formData = new FormData();
//      const sendPlayListStr = JSON.stringify(data.playList);
//      formData.append("image",data.photoIcon);   
//      formData.append("name",data.name);   
//      formData.append("description",data.description);   
//      formData.append("playList",sendPlayListStr);   
    
//     // return instance.post('setMusicPlayerList',data);
//     return instance.post('setMusicPlayerList',formData,{ headers: {
//                      'content-type': 'multipart/form-data'
//                  }})
// }