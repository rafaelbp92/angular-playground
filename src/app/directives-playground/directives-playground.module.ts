import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { MaximixeDirective } from './maximize.directive';
import { NotIfDirective } from './notif.directive';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AttributeDirectivesComponent,
    MaximixeDirective,
    NotIfDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
})
export class DirectivesPlaygroundModule { }
