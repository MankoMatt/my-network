import React, { useContext } from "react";
import { uptextinpost, addnewpost } from "../../Redux/ProfileReduser";
import Newpost from "./NewPost";
import MyContext from "../../Redux/Contex";

const NewpostContaner = () => {

  const context = useContext(MyContext)
  
    let state = context.store.getState()

    let sts = () => {
      context.store.dispatch(addnewpost())
    }

    let OnChange = (uwu) => {
      context.store.dispatch(uptextinpost(uwu))
    }

    return (
      <Newpost profile={state.profile} OnChange={OnChange} sts={sts}/>
    )
  }


export default NewpostContaner;
