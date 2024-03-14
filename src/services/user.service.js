import { get, save } from "./context.services";


const url="http://localhost:4000/getLOGINS/";



export function getuser(){
    return get(url);

}

export function saveuser(data){
    return save(url,data)
}