import type {RootAction} from 'reducers'
export type ChatLogAction = { type: "ADD_CHAT_LOG"; payload: string };

export type ChatLogState = string[];
export function chatLog(state: ChatLogState = [], action: RootAction) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CHAT_LOG":
      return [...state, payload];
    default:
      return state;
  }
}
