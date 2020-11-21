import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PromoComponent } from './promo.component';

describe('PromoComponent', () => {
  let component: PromoComponent;
  let fixture: ComponentFixture<PromoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
