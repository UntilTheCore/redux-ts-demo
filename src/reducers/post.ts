import { AnyAction } from "redux";

export type PostState = {
  id: string;
  title: string;
  content: string;
};

export type PostAction = {
  type: "add_post";
  post: PostState;
};

const initPostState: PostState = {
  id: "",
  title: "",
  content: "",
};

export function post(state: PostState = initPostState, action: AnyAction) {
  const { type, post } = action as PostAction;
  switch (type) {
    case "add_post":
      return { ...state, ...post };
    default:
      return state;
  }
}
