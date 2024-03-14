import { configureStore } from "@reduxjs/toolkit";


const reducer = (state, action) => {
    switch (action.type) {
        case "Department":
            return {
                ...state, Department: action.data

            }
        case "Userdata":
            return {
                ...state, Userdata: action.data
            }
            
    }
}
const store = configureStore({ reducer: reducer });
export default store;