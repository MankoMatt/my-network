import { Aapi } from "../api";
import axios from "axios";
import {getMe} from "./HeaderReduser";


export const ini = () => ({type: "INITIAL"});


let ineedthis = {
    initialized: false
};


export let appReduser = (state = ineedthis, action) => {
    
  switch (action.type) {

    case "INITIAL":

        return{
             ...state,
             initialized: true
             
       }

    
    default:
      return state;
  }
  
};


export const initialize = () => (dispatch) => {
    let promis = dispatch(getMe())

    promis.then(() => {
        dispatch(ini())
    })

  }





