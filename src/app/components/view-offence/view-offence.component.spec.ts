import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOffenceComponent } from './view-offence.component';

describe('ViewOffenceComponent', () => {
  let component: ViewOffenceComponent;
  let fixture: ComponentFixture<ViewOffenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOffenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOffenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
