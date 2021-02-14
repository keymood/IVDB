import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPostsComponent } from './view-posts.component';

describe('ViewPostsComponent', () => {
  let component: ViewPostsComponent;
  let fixture: ComponentFixture<ViewPostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
