import React from "react";
import { useContext } from "react";
import { follow, unfollow, textfind, SetUsers, newPage, count, qrew, pageup, pagedow, isChto, foloadSet, thunkMove } from "../Redux/UserReduser";
import MyContext from "../Redux/Contex";
import Users from "./Users";
import { Api } from "../api";





class Userss extends React.Component {
  componentDidMount() {
    this.props.thunk(this.props.users, this.props.ua)
  }

  setNewPage = (num) => {
    this.props.setPage(num);
    this.props.cho(true)
    Api.getUrl2(num, this.props.ua.pageSize)
      .then((response) => {
        this.props.cho(false)
        this.props.set(response.items);
        
      })};

  we = this.props.UnfollowUser;

  fg = this.props.FollowUser;

  idd = this.props.users.id;

  ck = (id) => {
    
    this.fg(id);
  };

  cckk = (id) => {
    
    this.we(id);
  };

  xuy = React.createRef();
  kapuchina = React.createRef();

  curkiii = this.props.Onecehge;
  OOnecehge = () => {
    
    let uwu = this.xuy.current.value;
    this.curkiii(uwu);
  };

  curevo = this.props.tool;
  pups = () => {
    
    let uwu = this.kapuchina.current.value;
    this.curevo(uwu);
    this.setNewPage(uwu);
  };

  oup = () => {
    this.props.up();
    return parseInt(this.props.ua.curpage) + 1;
  };

  ioppoi = () => {
    let newPage = this.oup();
    this.setNewPage(newPage);
  };

  odo = () => {
    this.props.down();
    return this.props.ua.curpage - 1;
  };

  iop = () => {
    let newPage = this.odo();
    this.setNewPage(newPage);
  };

  render() {
    
    return ( <>
      
      <Users
        foloadSet={this.props.foloadSet}
        ua={this.props.ua}
        ioppoi={this.ioppoi}
        odo={this.odo}
        iop={this.iop}
        oup={this.oup}
        pups={this.pups}
        OOnecehge={this.OOnecehge}
        kapuchina={this.kapuchina}
        xuy={this.xuy}
        cckk={this.cckk}
        ck={this.ck}
        idd={this.idd}
        fg={this.fg}
        we={this.we}
        setNewPage={this.setNewPage}
      />
      </>
    );
  }
}





const UserContaner = () => {
  const context = useContext(MyContext);

  const state = context.store.getState();

  

  let u = state.usersaaa;


  let foload = (id, bul) => {
    
    context.store.dispatch(foloadSet(id, bul))
    
  }

  let Onecehge = (int) => {
    
    context.store.dispatch(textfind(int));
  };

  let FollowUser = (userid) => {
    
    context.store.dispatch(follow(userid));
  };

  let UnfollowUser = (userid) => {
    
    context.store.dispatch(unfollow(userid));
  };

  let set = (users) => {
    
    context.store.dispatch(SetUsers(users));
  };

  let setPage = (number) => {
    context.store.dispatch(newPage(number))
  }

  let total = (total) => {
    context.store.dispatch(count(total))
  }
  
  let cure = (toop) => {
    
    context.store.dispatch(qrew(toop))
  }

  let up = () => {
    context.store.dispatch(pageup())
  }

  let down = () => {
    context.store.dispatch(pagedow())
  }


  let cho = (is) => {
    context.store.dispatch(isChto(is))
  }

  let thunk = (users, ua) => {
    context.store.dispatch(thunkMove(users, ua))
  }

  return (
    <Userss
      foloadSet={foload}
      users={u.users}
      ua={u}
      find={u.find}
      set={set}
      Onecehge={Onecehge}
      FollowUser={FollowUser}
      UnfollowUser={UnfollowUser}
      setPage={setPage}
      total={total}
      tool={cure}
      down={down}
      up={up}
      cho={cho}
      thunk={thunk}
    />
  );
};

export default UserContaner;
