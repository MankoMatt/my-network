import axios from "axios";


const baza = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b163f913-6282-4696-bcbb-0276aa0e82f2"
    }
})


export const Api = {
    getUrl: (curpage, pageSize) => {
        return baza.get(
            `users?page=${curpage}&count=${pageSize}`
        ).then(response => {
            return response.data
        })
    },


    getUrl2: (num, pageSize) => {
        return baza.get(`users?page=${num}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}


export const PApi = {
    getStatus: (id) => {

        return baza.get(`/profile/status/${id}`)
            .then(response => {

                    return response.data
                }
            )

    },

    setStatus: (status) => {
        baza.put(`/profile/status`, {status: status})
    },

    getProf: (id) => {

        return baza.get(`profile/${id}`)
    }
}


export const Aapi = {
    tuck: (email, password, rememberMe) => {
    
        return baza.post(`auth/login`, {email, password, rememberMe})
    },

    bye: () => {
        return baza.delete(`auth/login`)
    },

    me: () => {

        return baza.get(`auth/me`)
    },
}