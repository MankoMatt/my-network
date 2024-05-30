import s from "./App.module.css";
import React from "react";
import Nav from "./component/Navbar/Nav";
import DialogContaner from "./component/Dialogs/DialogContaner"
import {Route, Routes} from "react-router-dom";
import UserContaner from "./component/Users/UserContaner";
// import Contaner from "./component/Pro/ContanerPro";
import HeaderContaner from "./component/Head/HeaderContaner";
import Login from "./component/Login";
import {Component, useContext} from "react";
import MyContext from "./component/Redux/Contex";
import {initialize} from "./component/Redux/AppReduser";
import svg from "./component/photos/tube-spinner.svg"

const Contaner = React.lazy(() => import('./component/Pro/ContanerPro'))


class App extends Component {

    componentDidMount() {

        this.props.ini()
    }

    render() {

        if(!this.props.state.app.initialized){
            return <img src={svg}/>
        }

        return (

            <div className={s.home}>
                <HeaderContaner/>
                <Nav/>
                <div className={s.content}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route
                            path="/Dialog/*"
                            element={
                                <DialogContaner/>
                            }
                        />

                        <Route
                            path="/profile/:userId?"
                            element={<Contaner />}
                        />

                        <Route
                            path="/users/*"
                            element={<UserContaner/>}
                        />

                        <Route
                            path="/login/*"
                            element={<Login/>}
                        />
                       
                    </Routes>
                    </React.Suspense>
                </div>
            </div>

        );
    }
}


const Appee = () => {

    const context = useContext(MyContext);

    const state = context.store.getState();


    const iniMe = () => {
        context.store.dispatch(initialize())
    }


    return(
        <App ini={iniMe} state={state}/>
    )
}



export default Appee;
