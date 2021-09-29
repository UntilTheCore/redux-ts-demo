import { AnyAction } from "redux";
export type UserState = {
  username: string;
  gender: number;
  age: number;
};
export type UserAction = { type: "login"; user: UserState };

const initUserState: UserState = {
  username: "",
  gender: 0,
  age: 0,
};

export function user(state: UserState = initUserState, action: AnyAction) {
  const { type, user } = action as UserAction;

  switch (type) {
    case "login":
      return { ...state, ...user };
    default:
      return state;
  }
}
