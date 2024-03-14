import { get, save } from "./context.services";


const url="http://localhost:4000/getContactus/";



export function getContact(){
    return get(url);

}

export function saveContact(data){
    return save(url,data);
}