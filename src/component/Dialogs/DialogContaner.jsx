import React, { useContext } from "react";
import { masseges, update } from "../Redux/DialogReduser";
import Dialog from "./Dialog";
import MyContext from "../Redux/Contex";
import { HocRedirect } from "../hoc/authHoc";

const DialogContaner = () => {
    
  const context = useContext(MyContext)


  let state = context.store.getState()

  let formass = () => {
    context.store.dispatch(masseges())
  }

  let onchurka = (va) => {
    context.store.dispatch(update(va))
  }


  let Hoc = HocRedirect(Dialog)


  
  return (
    <Hoc state={state} dialog={state.dialog} onchurka={onchurka} formass={formass}/>
  )
}

export default DialogContaner;
