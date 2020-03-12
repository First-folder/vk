import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from"redux-thunk";
import headerReducer from "./header_reduser";

let rootReducer = combineReducers({
    headerR:headerReducer
})
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType> 

//@ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// ниже описано подключение стандарного стора , а выше описание подключения для работы  redux dev tool
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// window.store =store;
//@ts-ignore
window.__store__= store;

export default store;