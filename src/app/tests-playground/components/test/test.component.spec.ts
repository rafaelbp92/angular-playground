import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { By } from '@angular/platform-browser';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
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
      By.css('[data-testid]="message-container"')
    );

    expect(messageContainer.nativeElement.textContent).toBe('Error');
  });
});
