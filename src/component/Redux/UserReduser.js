import { Api } from "../api";
export const follow = (userid) => ({type: "FOLLOW", userid});
export const unfollow = (userid) => ({ type: "UNFOLLOW", userid });
export const SetUsers = (users) => ({ type: "SETUSERS", users });
export const textfind = (int) => ({ type: "FIND", int });
export const qrew = (may) => ({ type: "CUR", may });
export const newPage = (numberP) => ({ type: "NEWPAGE", numberP });
export const count = (total) => ({ type: "TOTAL", total });
export const pageup = () => ({ type: "UP" });
export const pagedow = () => ({ type: "DOWN" });
export const isChto = (isCho) => ({ type: "CHTO", isCo: isCho});
export const foloadSet = (id, bul) => ({type: "FOLOAD", id, bul})


let ineedthis = {
  find: "",

  users: [],
  pageCount: 90,
  pageSize: 5,
  curpage: 1,
  isChto: false,
  foload: []
};

export let userreduser = (state = ineedthis, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case "FIND":
      let statee = { ...state };
      statee.find = action.int;
      return statee;

    case "CUR":
      
      let statoo = { ...state };
      statoo.curpage = action.may;
      return statoo;


    case "SETUSERS":
      
      return { ...state, users: action.users };

    case "NEWPAGE":
      return {...state, curpage: action.numberP}
      
    case "TOTAL":
      return {...state, pageCount: action.total}

    case "UP":
            let stato = { ...state };
      stato.curpage = stato.curpage + 1;
      return stato;

    case "DOWN":
            let stao = { ...state };
      stao.curpage = stao.curpage - 1;
      return stao;


    case "CHTO":
            return {...state, isChto: action.isCo}

            
    case "FOLOAD":
      
      return {
        ...state,
        foload: action.bul ? [...state.foload, action.id] : state.foload.filter(id => id != action.id)
      }

    default:
      return state;
  }
};



export const thunkMove = (users, ua) => {

  return (dispatch) => {
    if (users.length === 0) {
      dispatch(isChto(true))
        Api.getUrl(ua.curpage, ua.pageSize).then((response) => {
          dispatch(isChto(false))
          dispatch(SetUsers(response.items))
          dispatch(count(response.totalCount))
          
        });
    }
  }
}
