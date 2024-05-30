import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  
  const fofa = () => {

    props.logout()
  }

  return (
    <header className={s.header}>
      <img
        className={s.imgs}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR347i1w00-8SGbSzhyA3kxDUvdE6ukljVX0q-dQaQOXnYf-LJQ2nL1v-giTlLCJLkGgDs&usqp=CAU"
      />
      <h2 className={s.namesite}>-^_^-</h2>
      <div>
        {props.state ? <button onClick={fofa} className={s.log}>Logout</button> : <NavLink to="/login"><div className={s.log}>login</div></NavLink>}
      </div>
      <div className={s.rorka}>
        {props.state ? props.stat+'#'+props.sta
       : null}
       </div>
       
    </header>
  );
  
};
export default Header;
