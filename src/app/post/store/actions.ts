import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../models/post.iterface';

export const getPosts = createAction('[POSTS] Get Posts');
export const getPostsSuccess = createAction(
  '[POSTS] Get Posts success',
  props<{ posts: PostInterface[] }>()
);
export const getPostsError = createAction(
  '[POSTS] Get Posts error',
  props<{ error: string }>()
);
