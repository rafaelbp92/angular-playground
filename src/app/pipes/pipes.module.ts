import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipe } from './customPipe';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    PipesComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class PipesModule { }
