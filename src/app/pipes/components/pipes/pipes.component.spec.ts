import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import { CustomPipe } from '../../customPipe';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesComponent, CustomPipe ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
