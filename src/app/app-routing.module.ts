import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/components/pipes/pipes.component';
import { PostsComponent } from './post/components/posts/posts.component';
import { AttributeDirectivesComponent } from './directives-playground/components/attribute-directives/attribute-directives.component';
import { ReactiveFormComponent } from './reactive-forms/components/reactive-form/reactive-form.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`,
  {
    path: 'home',
    component: HomeComponent
  },
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
  },
  {
    path: 'reactiveForms',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
