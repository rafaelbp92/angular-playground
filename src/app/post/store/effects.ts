import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './actions';
import { PostsService } from '../services/posts.service';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPosts),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map((posts) => PostActions.getPostsSuccess({ posts })),
          catchError((error) =>
            of(PostActions.getPostsError({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
