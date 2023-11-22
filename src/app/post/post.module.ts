import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PostEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostEffects])
  ],
  exports: [
    PostsComponent
  ]
})
export class PostModule { }
