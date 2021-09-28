import type { RootAction } from "reducers";
export type UserNameAction = { type: "SET_USERNAME"; payload: string };
export type UserNameState = string;
export function username(state: UserNameState = "", action: RootAction) {
  const { type, payload } = action;
  switch (type) {
    case "SET_USERNAME":
      return payload;
    default:
      return state;
  }
}
