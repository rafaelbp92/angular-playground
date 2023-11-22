import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipe } from './customPipe';



@NgModule({
  declarations: [
    PipesComponent,
    CustomPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
