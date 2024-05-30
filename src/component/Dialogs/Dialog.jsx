import { NavLink } from "react-router-dom";
import d from "./Dialog.module.css";
import React from "react";

const DialogItem = (props) => {
  return (
    <div>
      <div className={d.dialog + " " + d.active}>
        <NavLink to={"/Dialog/" + props.id}>{props.name}</NavLink>
      </div>
    </div>
  );
};


const Mass = (props) => {
  return (
    <div>
      <div className={d.massege}>{props.masseg}</div>
    </div>
  );
};




const Dialog = (props) => {
  let name = props.dialog.contacts.map((p) => <DialogItem name={p.name} id={p.id} />);

  let con = props.dialog.text.map((s) => <Mass masseg={s.text} />);



  let the = React.createRef();

  let formass = props.formass;


  let onchurka = props.onchurka;

  let onChangeTextArea = () => {
    let va = the.current.value;
    onchurka(va);
  }


  return (
    <div className={d.Dialogs}>
      <div className={d.dialogs}>{name}</div>
      <div className={d.chat}>
        {con}

        <div>
          <textarea
            onChange={onChangeTextArea}
            ref={the}
            value={props.dialog.dialogsms}
          ></textarea>
        </div>
        <div>
          <button onClick={formass}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
