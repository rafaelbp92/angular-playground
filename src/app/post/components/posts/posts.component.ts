import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../../store/actions';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postsSelector } from '../../store/selectors';
import { AppStateInterface } from 'src/app/models/appState.interface';
import { PostInterface } from '../../models/post.iterface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$: Observable<PostInterface[]>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
  }
}
