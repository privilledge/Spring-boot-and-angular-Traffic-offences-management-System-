import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOffenceComponent } from './new-offence.component';

describe('NewOffenceComponent', () => {
  let component: NewOffenceComponent;
  let fixture: ComponentFixture<NewOffenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOffenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOffenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
