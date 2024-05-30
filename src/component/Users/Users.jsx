import React from "react";
import s from "./User.module.css";
import photo from "../photos/User-avatar.svg.png";
import gifop from "../photos/tube-spinner.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  let b = "<";
  let bb = ">";


  
  return (
    <div className={s.tochka}>
      <div className={s.nott}></div>
      <div className={s.not}></div>
      <div className={s.buttons}>
        <button className={s.buu} onClick={props.iop}>
          {b}
        </button>
        <input
        type="number"
          className={s.inbu}
          onChange={props.pups}
          ref={props.kapuchina}
          value={props.ua.curpage}
        ></input>
        <button className={s.buut} onClick={props.ioppoi}>
          {bb}
        </button>
      </div>

      <div className={s.find}>
        <input
          type="text"
          placeholder="Поиск..."
          onChange={props.OOnecehge}
          ref={props.xuy}
          value={props.find}
          className={s.text}
        />
        <button className={s.button}>Find</button>
      </div>

      <div>
        {props.ua.isChto ? (
          <img className={s.tutu} src={gifop} />
        ) : (
          <div className={s.users}>
            <div className={s.uyy}>
              {props.ua.users.map((u) => (
                <div className={s.One}>
                  <NavLink to={"/profile/" + u.id}>
                    <img
                      className={s.ava}
                      src={u.photos.small != null ? u.photos.small : photo}
                    />
                  </NavLink>
                  <div>
                    
                    { u.followed ? (
                      <button disabled={props.ua.foload.some(id => id === u.id)}
                        className={s.follow}
                        onClick={() => {
                          props.foloadSet(u.id, true)
                          axios.delete(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                              withCredentials: true, 
                              headers: {
                                "API-KEY": "b163f913-6282-4696-bcbb-0276aa0e82f2"
                              }
                            }
                          )
                          .then((response) => {
                            if(response.data.resultCode == 0) {
                            props.cckk(u.id)}
                            props.foloadSet(u.id, false)
                        })}}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button disabled={props.ua.foload.some(id => id === u.id)}
                        className={s.follow}
                        onClick={() => {
                          
                          props.foloadSet(u.id, true)
                          
                          axios.post(
                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                              withCredentials: true, 
                              headers: {
                                "API-KEY": "b163f913-6282-4696-bcbb-0276aa0e82f2"
                              }
                            }
                          )
                          .then((response) => {
                            
                            if(response.data.resultCode == 0) {
                            props.ck(u.id)}
                            props.foloadSet(u.id, false)
                        })}}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                  <NavLink className={s.nik} to={"/profile/" + u.id}>
                    <div className={s.uioo}>
                      <div> {u.name} </div>
                    </div>
                  </NavLink>
                  <NavLink className={s.bio} to={"/profile/" + u.id}>
                    <div className={s.uioo}>
                      <div> {u.status} </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
