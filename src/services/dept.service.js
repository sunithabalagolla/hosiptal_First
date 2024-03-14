// import { get,save, update} from "./context.services";
import { deleteItem, get, save, update } from "./context.services";


let departmentTypeUrl="http://localhost:4000/getDept/";
let deleteDepartmentUrl="http://localhost:4000/deleteDept/";


//create a function for getdata for propertytype
export function getDepartmentType(){
    return get(departmentTypeUrl);
    
}


//create a function for save data for propertytype
export function saveDepartmentType(data){
        return save(departmentTypeUrl,data);
    
}

//create a fn for updata data for propertype
export function updataDepartmentType(data){
    return update(departmentTypeUrl,data);
   
}

//create a fn for delete data for propertype
export function deleteDepartmentType(id){
   
    return deleteItem(deleteDepartmentUrl+id);
}