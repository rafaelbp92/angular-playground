import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/components/pipes/pipes.component';
import { PostsComponent } from './post/components/posts/posts.component';

const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'redux',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
