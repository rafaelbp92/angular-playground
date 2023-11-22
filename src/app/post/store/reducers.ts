import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from '../models/postState.inteface';
import * as PostActions from './actions';

export const initialState: PostStateInterface = {
  posts: [],
  isLoading: false,
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(PostActions.getPosts, (state: PostStateInterface) => ({
    ...state,
    isLoading: true,
  })),
  on(PostActions.getPostsSuccess, (state: PostStateInterface, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostActions.getPostsError, (state: PostStateInterface, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
