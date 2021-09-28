import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers, { RootAction, RootState, combineReducer } from "reducers";

const store: Store<RootState, RootAction> = createStore(
  combineReducer,
  devToolsEnhancer({ trace: true })
);

console.log(store.getState());

setTimeout(() => {
  store.dispatch({
    type: "ADD_CHAT_LOG",
    payload: "ccc",
  });
}, 1000);

store.subscribe(() => {
  console.log(store.getState());

  render();
});

const App: React.FC = () => {
  return (
    <div>
      <section>123</section>
      <button>inc</button>
      <button>desc</button>
    </div>
  );
};

render();

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
