import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allMyReducers from "./reducer/reducers.js";
//import {changeColor, changeShoe} from "./actions/actions.js";

//createStore needs a reducer to create a createStore
const store = createStore(allMyReducers);
window.store = store;

//store.dispatch(action) needs an action, which is basically a javascript object
//store.dispatch(changeColor("#BB4553"));
//store.dispatch(changeShoe("ADIDAS>>>>"));

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById("root"));
registerServiceWorker();
