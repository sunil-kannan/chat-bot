import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTriggerPageComponent } from './payment-trigger-page.component';

describe('PaymentTriggerPageComponent', () => {
  let component: PaymentTriggerPageComponent;
  let fixture: ComponentFixture<PaymentTriggerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentTriggerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentTriggerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
