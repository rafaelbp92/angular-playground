import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesComponent } from './attribute-directives.component';
import { NotIfDirective } from '../../notif.directive';
import { MaximixeDirective } from '../../maximize.directive';

describe('AttributeDirectivesComponent', () => {
  let component: AttributeDirectivesComponent;
  let fixture: ComponentFixture<AttributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectivesComponent, NotIfDirective, MaximixeDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
