import { chatLog, ChatLogAction } from "reducers/chatLog";
import { statusMessage, StatusMessageAction } from "reducers/statusMessage";
import { username, UserNameAction } from "reducers/username";
import { combineReducers } from "redux";

/* type ChatLogAction = { type: "ADD_CHAT_LOG"; payload: string };
type StatusMessageAction = { type: "CHANGE_STATUS"; payload: string };
type UserNameAction = { type: "SET_USERNAME"; payload: string };
 */
export type RootAction = ChatLogAction | StatusMessageAction | UserNameAction;

export type RootState = {
  chatLog: string[];
  statusMessage: string;
  username: string;
};

const initState: RootState = {
  chatLog: [],
  statusMessage: "",
  username: "",
};

export default function rootReducers(
  state: RootState = initState,
  action: RootAction
) {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    username: username(state.username, action),
  };
}

export const combineReducer = combineReducers({
  chatLog,
  statusMessage,
  username,
});
