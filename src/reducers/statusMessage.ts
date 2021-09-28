import type { RootAction } from "reducers";
export type StatusMessageAction = { type: "CHANGE_STATUS"; payload: string };
export type StatusMessageState = string;
export function statusMessage(state: StatusMessageState = '', action: RootAction) {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_STATUS":
      return payload;
    default:
      return state;
  }
}
