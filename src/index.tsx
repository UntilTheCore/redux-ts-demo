import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
// import { store } from "./app/store";
// import App from './App';
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers, { RootAction, RootState } from "reducers/index";

// type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

/* function reducers(state = 0, action: Action) {
  const { type } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
} */

/* function increment(): Action {
  return {
    type: "INCREMENT",
  };
} */

/* function decrement(): Action {
  return {
    type: "DECREMENT",
  };
} */

const store: Store<RootState, RootAction> = createStore(
  rootReducers /* preloadedState, */,
  devToolsEnhancer({ trace: true })
);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
  render();
});

setTimeout(() => {
  store.dispatch({
    type: "ADD_CHAT_LOG",
    payload: "bbb",
  });
}, 1000);

const App: React.FC = () => {
  return (
    <>
      <div>123</div>
      <button
        onClick={() =>
          store.dispatch({
            type: "ADD_CHAT_LOG",
            payload: "new log",
          })
        }
      >
        add log
      </button>
      <button>decrement</button>
    </>
  );
};

render();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}
