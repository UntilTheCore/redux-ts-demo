import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { store } from "./app/store";
// import App from './App';

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

function reducers(state = 0, action: Action) {
  const { type } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducers);

const App: React.FC = () => {
  return (
    <>
      <div>1</div>
      <button>increment</button>
      <button>decrement</button>
    </>
  );
};

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
