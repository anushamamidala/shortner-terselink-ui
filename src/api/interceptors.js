import axios from 'axios'
import store from '../redux/index'

const getTokenFromStore = () => {
    const storeInstance = store.getState();
    return storeInstance?.userReducer?.authToken
}

axios.interceptors.request.use(async request => {
    let token = getTokenFromStore();
    if (!token) {
        token = await localStorage.getItem('authTokenId');
    }
    if (token)
        request.headers.common["Authorization"] = `Bearer ${token}`
    return request;
})

axios.interceptors.response.use(async response => {
    return response;
},
    async error => {
        const errorResponse = error?.response;
        if (errorResponse) {
            if (errorResponse.status === 500 &&
                errorResponse?.data?.error?.message === "Unauthorized access") {
                await localStorage.removeItem("authTokenId");
                window.location.reload();
            }
        };
        throw error;
    })