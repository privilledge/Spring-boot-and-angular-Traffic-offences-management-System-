import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficerComponent } from './edit-officer.component';

describe('EditOfficerComponent', () => {
  let component: EditOfficerComponent;
  let fixture: ComponentFixture<EditOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
