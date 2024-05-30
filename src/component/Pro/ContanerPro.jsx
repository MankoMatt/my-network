import Prof from "./Profile";
import MyContext from "../Redux/Contex";
import axios from "axios";
import React, {useContext} from "react";
import {biooo, getProfile, getStatus, nammee, setPhoto, setStatus} from "../Redux/ProfileReduser";
import {useParams} from "react-router-dom";
import {HocRedirect} from "../hoc/authHoc";

class ProfCont extends React.Component {
    componentDidMount() {

        this.props.getProf(this.props.id)

        //this.props.setSttatus(this.props.userid);

    }

    render() {
        let Hoc = Prof;

        return (
            <Hoc
                //setStatus={this.props.setSttatus}
                getSttatusId={this.props.id}
                status={this.props.state.profile.status}
                state={this.props.state}
                props={this.props}
                getSttatus={this.props.getSttatus}
            />
        );
    }
}

const Contaner = React.memo(() => {
    const context = useContext(MyContext);
    let state = context.store.getState();

    const params = useParams();
    let userId = params.userId;

    let setphoto = (p) => {
        context.store.dispatch(setPhoto(p));
    };

    let name = (n) => {
        context.store.dispatch(nammee(n));
    };

    let bio = (b) => {
        context.store.dispatch(biooo(b));
    };

    // let setSttatus = (id) => {
    //     context.store.dispatch(setStatus(id));
    // };
    //
    // let getSttatus = (status) => {
    //
    //     context.store.dispatch(getStatus(status));
    // };

    let gytProf = (id) => {
        
        context.store.dispatch(getProfile(id));
    }

    let Hoc = HocRedirect(ProfCont)

    return (
        <Hoc
            id={state.auth.id}
            getProf={gytProf}
            //getSttatus={getSttatus}
           // setSttatus={setSttatus}
            state={state}
            setP={setphoto}
            name={name}
            bio={bio}
            userid={userId}
        />
    );
});


export default Contaner;
