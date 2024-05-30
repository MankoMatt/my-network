import s from "./MyPost.module.css";
import photo from "../../photos/User-avatar.svg.png"


const Post1 = (props) => {
  return (
    <div className={s.grid}>
      <img
        className={s.img}
        src={props.ava != null ? props.ava : photo}
      ></img>
      <div className={s.post}>{props.mag}</div>
      <div className={s.liked}>
        <span className={s.like}>Like:{props.like}</span>
      </div>
    </div>
  );
};

export default Post1;
