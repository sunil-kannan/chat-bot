import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-trigger-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-trigger-page.component.html',
  styleUrl: './payment-trigger-page.component.css'
})
export class PaymentTriggerPageComponent {
  loading:boolean=false;
  status:string="";
  trn_id:string =""
  ClickToPay(){
    this.loading=true;
    
    window.open('/third_party_payment', '_blank');
    this.fetchMethod()
  }
  
fetchMethod() {
  const checkStatus = () => {
    console.log("Checking payment status...");
    const status = localStorage.getItem("payment_status");
    const trn_id = localStorage.getItem('trn_id')
    if (status === 'success' || status === 'failed') {
      this.loading = false;
      this.status = status;
      this.trn_id = trn_id;
      clearInterval(intervalId); // Stop checking once a final status is reached
    } else {
      this.loading = true;
    }
  };

  // Check the status every 5 seconds
  const intervalId = setInterval(checkStatus, 5000);

  // Initial check
  checkStatus();
}
}
