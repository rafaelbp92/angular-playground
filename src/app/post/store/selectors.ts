import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { PostStateInterface } from '../models/postState.inteface';

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state: PostStateInterface) => state.isLoading
);

export const postsSelector = createSelector(
    selectFeature,
    (state: PostStateInterface) => state.posts
  );

  export const errorSelector = createSelector(
    selectFeature,
    (state: PostStateInterface) => state.error
  );