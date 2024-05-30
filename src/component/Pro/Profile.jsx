import d from "./Profile.module.css";
import Post1 from "./MyPosts/MyPost.jsx";
import NewpostContaner from "./MyPosts/NewPostContaner";
import StatusProf from "./SaatusProf.jsx";
import React from "react";
import StatusProfHook from "./SaatusProfHook";


const Prof = (props) => {



    let sys = props.props.state.profile.posts.map((sd) => <Post1 ava={props.props.state.profile.photos} mag={sd.tex}
                                                                 like={sd.like}/>);

    return (
        <div className={d.div}>
            <div className={d.div1}>
                <img
                    className={d.img}
                    src="https://study-con.com/wp-content/uploads/2020/03/itu2.jpg"
                />
            </div>
            <div className={d.div2}>{props.props.state.profile.name}</div>
            <div className={d.div2}>{props.props.state.profile.bio}</div>
            {/*<div>*/}
            {/*    <StatusProfHook setUpStatus={props.getSttatus} status={props.status}/>*/}
            {/*</div>*/}
            <div>
                <NewpostContaner/>
            </div>

            {sys}
        </div>
    );

};


export default Prof;
