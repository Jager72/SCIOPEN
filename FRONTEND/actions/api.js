import axios from 'axios';

const baseUrl='https://94d6-213-155-177-31.ngrok.io/api/';

export default {
    order(url=baseUrl+'Orders/'){
        return{
            fetchAll:()=>axios.get(url),
            add:(order)=>axios.post(url,order),
            edit:(order)=>axios.put(url,order),
            delete:(id)=>axios.delete(url+id)
        }
    },
    user(url=baseUrl+'user/'){
        return{
            login: (login,pin) => axios.get(url+login+"/"+pin,{withCredentials:true})
        }
    }
}
