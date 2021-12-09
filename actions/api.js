import axios from 'axios';

const baseUrl='no jeszcze kurwa nie ma';

export default {
    user(url=baseUrl+'user/'){
        return{
            login: (login,pin) => axios.get(url+login+"/"+pin,{withCredentials:true})
        }
    }
}
