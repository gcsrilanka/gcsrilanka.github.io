import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollaboratorsComponent } from './collaborators.component';

describe('CollaboratorsComponent', () => {
  let component: CollaboratorsComponent;
  let fixture: ComponentFixture<CollaboratorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
