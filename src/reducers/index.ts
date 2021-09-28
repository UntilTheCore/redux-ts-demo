import { combineReducers } from "redux";
import { chatLog, ChatLogState } from "reducers/chatLog";
import { statusMessage, StatusMessageState } from "reducers/statusMessage";
import { username, UserNameState } from "reducers/username";
export type RootState = {
  chatLog: ChatLogState;
  statusMessage: StatusMessageState;
  username: UserNameState;
};

type ChatLogAction = { type: "ADD_CHAT_LOG"; payload: string };
type StatusMessageAction = { type: "CHANGE_STATUS"; payload: string };
type UserNameAction = { type: "SET_USERNAME"; payload: string };
export type RootAction = ChatLogAction | StatusMessageAction | UserNameAction;

/* const initState: RootState = {
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
} */

export default combineReducers({
  chatLog,
  statusMessage,
  username,
});

