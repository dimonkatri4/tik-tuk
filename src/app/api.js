import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tiktok33.p.rapidapi.com/',
    withCredentials: true,
    headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '3c6056bf3fmshc034881d310ceb2p1396b9jsne10f344201bc'
    }
})
export const userAPI = {
    getUserFeed() {
        return instance.get(`user/feed/dave.xp`).then(response => response.data)
    },
    getUserInfo() {
        return instance.get(`user/info/dave.xp`).then(response => response.data)
    }
}

export const trendingAPI = {
    getTrendingFeed() {
        return instance.get(`trending/feed`).then(response => response.data)
    }
}