import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-payment-status',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule],
  templateUrl: './show-payment-status.component.html',
  styleUrl: './show-payment-status.component.css'
})
export class ShowPaymentStatusComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  paymentStatus: boolean = false;
  status: string;
  trn_id: string;
  ngOnInit(): void {
  //   this.http.get('http://localhost:4201').subscribe((res) => {
  //     console.log(res)
  // })
    const paramValue = this.route.snapshot.queryParams['trn'];
    console.log(paramValue);

    this.http.get(`http://192.168.0.128:9096/check?tr_id=${paramValue}`).subscribe((res: any) => {
      this.paymentStatus = true;
      this.trn_id = res.transaction_id;
      localStorage.setItem("trn_id", this.trn_id)
      if (res.status == "Success") {
        this.status = res.status;
        localStorage.setItem("payment_status", 'success');
        
      }
      else if (res.status == "Failed") {
        this.status = res.status;
        localStorage.setItem("payment_status", 'failed');
      }
    })

  }


}
