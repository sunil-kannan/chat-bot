import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-third-party-page',
  standalone: true,
  imports: [],
  templateUrl: './third-party-page.component.html',
  styleUrl: './third-party-page.component.css'
})
export class ThirdPartyPageComponent {
  constructor(private http: HttpClient) { }

  paymentSuccessOrFailed(flag: boolean) {
    const payment = {
      status: "Success",
      transaction_id: "123456789"
    }
    //  window.location.href = 'http://192.168.0.128:9096/gg?tr_id=123456789&status=Success'
    this.http.post('http://192.168.0.103:8080/callback1',payment).subscribe((res) => {
        console.log(res)
    })

  }
}
