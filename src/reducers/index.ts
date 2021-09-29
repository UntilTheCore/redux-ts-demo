import { post, PostAction, PostState } from "reducers/post";
import { user, UserAction, UserState } from "reducers/user";
import { combineReducers } from "redux";

export type RootAction = PostAction | UserAction;

export type RootState = {
  user: UserState;
  post: PostState;
};

const initState: RootState = {
  user: {
    username: "",
    gender: 0,
    age: 0,
  },
  post: {
    id: "",
    title: "",
    content: "",
  },
};

export default function rootReducers(
  state: RootState,
  action: RootAction
) {
  return {
    post: post(state.post, action),
    user: user(state.user, action),
  };
}

export const combineReducer = combineReducers({
  post,
  user,
});
