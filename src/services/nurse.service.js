import { deleteItem, get, save, update } from "./context.services";


let nurseTypeUrl="http://localhost:4000/getNurse/";
let deleteNurseUrl="http://localhost:4000/deleteNurse/";


//create a function for getdata for propertytype
export function getNurseType(){
    return get(nurseTypeUrl);
    
}


//create a function for save data for propertytype
export function saveNurseType(data){
        return save(nurseTypeUrl,data);
    
}

//create a fn for updata data for propertype
export function updataNurseType(data){
    return update(nurseTypeUrl,data);
   
}

//create a fn for delete data for propertype
export function deleteNurseType(id){
   
    return deleteItem(deleteNurseUrl+id);
}