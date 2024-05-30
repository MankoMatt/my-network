import { Navigate } from "react-router-dom"
import React from "react"

export const HocRedirect = (Component) => {


    
    class HRed extends React.Component{
        render() {

            if(!this.props.state.auth.isAuth) return <Navigate to="/login"/>

            return <Component {...this.props}/>
        }
    }
    return HRed
}