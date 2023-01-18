import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFineComponent } from './new-fine.component';

describe('NewFineComponent', () => {
  let component: NewFineComponent;
  let fixture: ComponentFixture<NewFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
