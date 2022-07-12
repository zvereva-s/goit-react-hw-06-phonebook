import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from './contacts/contacts-reducer';


const rootReducer = combineReducers({
   contacts: contactsReducer
})
export default rootReducer; 