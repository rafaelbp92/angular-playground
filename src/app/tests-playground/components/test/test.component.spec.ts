import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { UtilService } from '../../services/utils.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  const mockUtilsService = {
    getLettersArray: () => { return ['a', 'b'] }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [{provide: UtilService, useValue: mockUtilsService}]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders default message', () => {
    const messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );

    expect(messageContainer.nativeElement.textContent).toContain(
      'Message test'
    );
  });

  it('renders input message', () => {
    const message = 'Input 1';
    component.message = message;
    fixture.detectChanges();

    const messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );

    expect(messageContainer.nativeElement.textContent).toContain(message);
  });

  it('should emit a click event', () => {
    let valueEmitted: number | undefined;
    component.outputEvent.pipe(first()).subscribe((value) => {
      valueEmitted = value;
    });
    const button = fixture.debugElement.query(
      By.css('[data-testid="emit-button"]')
    );
    button.triggerEventHandler('click');
    expect(valueEmitted).toBe(1);
  });
});
