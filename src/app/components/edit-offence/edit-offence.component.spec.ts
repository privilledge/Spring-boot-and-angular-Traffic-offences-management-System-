import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOffenceComponent } from './edit-offence.component';

describe('EditOffenceComponent', () => {
  let component: EditOffenceComponent;
  let fixture: ComponentFixture<EditOffenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOffenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOffenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
