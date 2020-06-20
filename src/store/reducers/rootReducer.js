import authReducer from "./authReducer";
import donateReducer from "./donateReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  donor: donateReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
export default rootReducer;
