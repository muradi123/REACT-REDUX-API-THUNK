import { combineReducers } from "redux";
import { GetPostsReducers } from "./GetPostsReducer";

export const AllReducers = combineReducers({
   fetchedPosts : GetPostsReducers
}) 