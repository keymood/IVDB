import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSelectFormControlComponent } from './reactive-select-form-control.component';

describe('ReactiveSelectFormControlComponent', () => {
  let component: ReactiveSelectFormControlComponent;
  let fixture: ComponentFixture<ReactiveSelectFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSelectFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSelectFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
