import Header from "./Header";
import React, {useContext} from "react";
import MyContext from "../Redux/Contex";
import {getMe, logout, setUserData} from "../Redux/HeaderReduser";

class  HeaderClassContaner extends React.Component {
    
    componentDidMount() {

    }


    render(){
        return <>
            <Header logout={this.props.logout} state={this.props.state.isAuth} stat={this.props.state.login}  sta={this.props.state.id}/>
        </>
        
    }
    

    
}


const HeaderContaner = () => {
    
    const context = useContext(MyContext);

    const state = context.store.getState();
  
    let auth = state.auth  
    
    let setUserDat = (login, email, id, io) => {
    context.store.dispatch(setUserData(login, email, id, io))
}

    const klkl = () => {
        context.store.dispatch(logout())
    }



    return (
        <>
            <HeaderClassContaner 
            logout={klkl}
            state={auth}
            setUserDat={setUserDat}
            />
        </>
    )
}


export default HeaderContaner