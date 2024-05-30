import { Aapi } from "../api";
import axios from "axios";


export const setUserData = (login, email, id, isAuth) => ({type: "USER_DATA", udata:{ login, email, id, isAuth}});
export const err = (t) => ({type: "ERR", udatag:{t}});


let ineedthis = {
    login: null,
    email: null,
    id:null,
    isAuth: false,
    err: false
};


export let authReduser = (state = ineedthis, action) => {
    
  switch (action.type) {

    case "USER_DATA":

        return{
             ...state,
             ...action.udata,
             
       }

       case "ERR":
        return{
             ...state,
              err: action.udatag
             
       }


    
    default:
      return state;
  }
  
};


export const logpog = (login, pass, check) => (dispatch) => {

  Aapi.tuck(login, pass, check)
  .then(response => {

    if(response.data.resultCode === 0) {

      axios
      .get(
          `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
      )
      .then((response) => {
          if(response.data.resultCode === 0){

          const {login, email, id} =  response.data.data
          dispatch(setUserData( login, email, id, true))
          
        }})}
        dispatch(err(true))
    }
  )}


export const logout = () => (dispatch) => {
  Aapi.bye()
  .then(() => {

    dispatch(setUserData(null, null, null, false))
  })
}



export const getMe = () => (dispatch) => {
    return Aapi.me()
        .then((response) => {

            if(response.data.resultCode === 0){
                const {login, email, id} =  response.data.data
                dispatch(setUserData( login, email, id, true))

            }
        })

}




