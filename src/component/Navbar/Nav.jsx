import { NavLink } from "react-router-dom";
import g from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={g.nav}>
      <div className={g.theme}>
        <NavLink to="/Profile">
        <div className={g.doj}> 
        <div className={g.p}>
          Profile
        </div>
        </div>
        </NavLink>
        <NavLink to="/Dialog">
        <div className={g.doj}>
        <div className={g.p}>
          Messeges
        </div>
        </div>
        </NavLink>
        <NavLink to="/users">
        <div className={g.doj}>
        <div className={g.p}>
          Find a Person
        </div>
        </div>
        </NavLink>
        <div className={g.doj}>
        <div className={g.p}>
          <a> News</a>
        </div>
        </div>
        <div className={g.doj}>
        <div className={g.p}>
          <a>Music</a>
        </div>
        </div>
        <div className={g.doj}>
        <div className={g.p}>
          <a>Settings</a>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
