import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffencesComponent } from './offences.component';

describe('OffencesComponent', () => {
  let component: OffencesComponent;
  let fixture: ComponentFixture<OffencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
