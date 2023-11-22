import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/components/pipes/pipes.component';
import { PostsComponent } from './post/components/posts/posts.component';
import { AttributeDirectivesComponent } from './directives-playground/components/attribute-directives/attribute-directives.component';

const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'redux',
    component: PostsComponent
  },
  {
    path: 'attributeDirectives',
    component: AttributeDirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
