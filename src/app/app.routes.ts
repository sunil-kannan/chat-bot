import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ThirdPartyPageComponent } from './third-party-page/third-party-page.component';
import { PaymentTriggerPageComponent } from './payment-trigger-page/payment-trigger-page.component';
import { ShowPaymentStatusComponent } from './show-payment-status/show-payment-status.component';

export const routes: Routes = [
    { path: '', component: PaymentTriggerPageComponent },
    { path: 'third_party_payment', component: ThirdPartyPageComponent },
    { path: 'show_status', component: ShowPaymentStatusComponent }
];
