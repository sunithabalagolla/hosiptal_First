import { deleteItem, get, save, update } from "./context.services";


let doctorTypeUrl="http://localhost:4000/getDoctor/";
let deleteDoctorUrl="http://localhost:4000/deleteDoctor/";


//create a function for getdata for propertytype
export function getDoctorType(){
    return get(doctorTypeUrl);
    
}


//create a function for save data for propertytype
export function saveDoctorType(data){
        return save(doctorTypeUrl,data);
    
}

//create a fn for updata data for propertype
export function updataDoctorType(data){
    return update(doctorTypeUrl,data);
   
}

//create a fn for delete data for propertype
export function deleteDoctorType(id){
   
    return deleteItem(deleteDoctorUrl+id);
}