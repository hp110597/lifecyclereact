import { combineReducers, createStore } from "redux";
import DemoBurger from "../pages/DemoRedux/DemoBurger/DemoBurger";
import { demoBurgerReducer } from "./reducers/demoBurgerReducer";
import { demoGioHangReducer } from "./reducers/demoGioHangReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";
import { qlsvReducer } from "./reducers/qlsv.Reducer";


//rootReducer: state tổng của ứng dụng
const rootReducer = combineReducers({
  number: numberReducer,
  imgCar: imgCarReducer,
  qlsvReducer, //object literal
  demoGioHangReducer:demoGioHangReducer,
  demoBurgerReducer:demoBurgerReducer
  //stateA,....
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
