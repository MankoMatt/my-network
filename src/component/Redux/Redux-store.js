import { profileReduser } from "./ProfileReduser";
import { dialogReduser } from "./DialogReduser";
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userreduser } from "./UserReduser";
import { authReduser } from "./HeaderReduser";
import {appReduser} from "./AppReduser";


let reducers = combineReducers({
    profile: profileReduser,
    dialog: dialogReduser,
    usersaaa: userreduser,
    auth: authReduser,
    app: appReduser,
    
})
        

let store = configureStore({reducer: reducers})


window.store = store

export default store