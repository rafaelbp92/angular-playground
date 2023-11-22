import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { MaximixeDirective } from './maximize.directive';
import { NotIfDirective } from './notif.directive';



@NgModule({
  declarations: [
    AttributeDirectivesComponent,
    MaximixeDirective,
    NotIfDirective
  ],
  imports: [
    CommonModule
  ],
})
export class DirectivesPlaygroundModule { }
