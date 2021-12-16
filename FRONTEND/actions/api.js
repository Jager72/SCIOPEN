import axios from 'axios';

const baseUrl='https://e6ef-213-155-177-31.ngrok.io/api/';

export default {
    order(url=baseUrl+'Orders/'){
        return{
            fetchAll:()=>axios.get(url),
            create:(order)=>axios.post(url,order),
            update:(order)=>axios.put(url,order),
            delete:(id)=>axios.delete(url+id)
        }
    },
    user(url=baseUrl+'user/'){
        return{
            login: (login,pin) => axios.get(url+login+"/"+pin,{withCredentials:true}),
            fetchAll:()=>axios.get(url),
            create:(room)=>axios.post(url,room),
            update:(room)=>axios.put(url,room),
            delete:(id)=>axios.delete(url+id)
        }
    },
    room(url=baseUrl+'Rooms/'){
        return{
            fetchAll:()=>axios.get(url),
            create:(room)=>axios.post(url,room),
            update:(room)=>axios.put(url,room),
            delete:(id)=>axios.delete(url+id)
        }
    },

}