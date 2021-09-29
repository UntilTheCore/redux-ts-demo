import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers, { combineReducer, RootAction, RootState } from "reducers";

const store: Store<RootState, RootAction> = createStore(
  combineReducer,
  devToolsEnhancer({ trace: true })
);

console.log(store.getState());

setTimeout(() => {
  store.dispatch({
    type: "add_post",
    post: {
      id: "1",
      title: "new post",
      content: "new content",
    },
  });
}, 1000);

setTimeout(() => {
  store.dispatch({
    type: "login",
    user: {
      username: "zhangsan",
      gender: 1,
      age: 18,
    },
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
