import {createSelector} from "reselect";


const userG = (state) => {
    return state.usersaaa.users
}

export const getUsersSel = createSelector(userG, (users) => {
    return users
})