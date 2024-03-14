import { deleteItem, get, save, update } from "./context.services";


let patientTypeUrl="http://localhost:4000/getPatient/";
let deletePatientUrl="http://localhost:4000/deletePatient/";


//create a function for getdata for propertytype
export function getPatientType(){
    return get(patientTypeUrl);
    
}


//create a function for save data for propertytype
export function savePatientType(data){
        return save(patientTypeUrl,data);
    
}

//create a fn for updata data for propertype
export function updatePatientType(data){
    return update(patientTypeUrl,data);
   
}

//create a fn for delete data for propertype
export function deletePatientType(id){
   
    return deleteItem(deletePatientUrl+id);
}