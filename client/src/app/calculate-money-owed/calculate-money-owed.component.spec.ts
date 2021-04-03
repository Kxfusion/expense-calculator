import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMoneyOwedComponent } from './calculate-money-owed.component';

describe('CalculateMoneyOwedComponent', () => {
  let component: CalculateMoneyOwedComponent;
  let fixture: ComponentFixture<CalculateMoneyOwedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateMoneyOwedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateMoneyOwedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
