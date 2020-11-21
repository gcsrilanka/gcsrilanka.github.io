import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialComponent } from './testimonial.component';

describe('TestimonialComponent', () => {
  let component: TestimonialComponent;
  let fixture: ComponentFixture<TestimonialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
