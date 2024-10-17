import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaymentStatusComponent } from './show-payment-status.component';

describe('ShowPaymentStatusComponent', () => {
  let component: ShowPaymentStatusComponent;
  let fixture: ComponentFixture<ShowPaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPaymentStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
