import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenceHistoryComponent } from './offence-history.component';

describe('OffenceHistoryComponent', () => {
  let component: OffenceHistoryComponent;
  let fixture: ComponentFixture<OffenceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenceHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
