import { PApi } from "../api";
import {getMe} from "./HeaderReduser";
import {ini} from "./AppReduser";

export const uptextinpost = (text) => ({type: "UPPOSTTEXT", uptextpost: text,});
export const addnewpost = () => ({ type: "ADDPOST" });
//export const getyStatus = (status) => ({type: "STATUS", statusa: status})
export const setPhoto = (photos) => ({type: "PHOTOS", photos: photos,});
export const nammee = (name) => ({type: "NAME", name: name,});
export const biooo = (bio) => ({type: "BIO", bio: bio,});


let ineedthis = {
  newposttext: '',
  posts: [
    { like: "  " + "383", tex: "Ты купишь у менъя! эти арбузы!", id: 1 },
    { like: "  " + "476", tex: "Низачтёёёёёё!!!", id: 2 },
    {
      like: "  " + "9999999",
      tex: "Я от выших арбузов...",
      id: 3,
    },
  ],

  name: null,
  bio: null,
  photos: null,
  status: ''
  
};

export let profileReduser = (state = ineedthis, action) => {
  switch (action.type) {
    case "ADDPOST":
      let obj = {
        id: 3,
        tex: state.newposttext,
        like: "  " + "49",
      };
      

      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(obj);
      stateCopy.newposttext = "";
      return stateCopy;

    case "UPPOSTTEXT":
      let stateCopy2 = { ...state };
      stateCopy2.newposttext = action.uptextpost;
      
      return stateCopy2;


    case "PHOTOS":
      let ron = { ...state };
      ron.photos = action.photos;
      return ron;


    case "NAME":
      let ronn = { ...state };
      ronn.name = action.name;
      return ronn;
  
    case "BIO":
      let roon = { ...state };
      roon.bio = action.bio;
      return roon;

    case "STATUS":

    let rorr = {...state}
    rorr.status = action.statusa
    return rorr
  
    default:
      return state;
  }
};



//
// export const setStatus = (id) => {
//
//   return (dispatch) => {
//
//     PApi.getStatus(id).then(response => {
//       dispatch(getyStatus(response))
//     })
//     }
// }

// export const getStatus = (satus) => {
//
//   return (dispatch) => {
//
//         PApi.setStatus(satus)
//         dispatch(getyStatus(satus))
//           }
// }



export const getProfile = (id) => (dispatch) => {

  PApi.getProf(id)
      .then(response => {

        dispatch(setPhoto(response.data.photos.large))
        dispatch(nammee(response.data.fullName));
        dispatch(biooo(response.data.aboutMe));
      }).catch(error => console.log(error))


}
