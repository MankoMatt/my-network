import React from "react";

const Newpost = (props) => {
  
  
let yu = React.createRef()

  let sus = props.sts;

  


  let oncurka = props.OnChange;

  let onChangeTextArea = () => {
    let uwu = yu.current.value;
    oncurka(uwu);
  }

  return (
    <div>
      <div>
        <textarea onChange={onChangeTextArea} ref={yu} value={props.profile.newposttext} />
      </div>
      <div>
        <button onClick={sus}>Add New Post</button>
      </div>
    </div>
  );
};

export default Newpost;

//Боже какая же это тупая компонента!
