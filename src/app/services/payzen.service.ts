import { Injectable } from '@angular/core';
import { PayzenCreatePaymentRequestModel } from './payzen-createpayment-request';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayzenService {

  constructor(private http: HttpClient ) { }

  // SERVICIOS NATIVOS DE PAYZEN
  createPayment(payzenCreatePaymentRequest: PayzenCreatePaymentRequestModel){
    
    const headers = new HttpHeaders({
      'Authorization' : 'Basic ' + 'NTAxNTY2MzI6dGVzdHBhc3N3b3JkX1V4VE1HN2twUmhnNndLZmp4cm1GMEZkbmhsZjNTYlR4SlNxUkpCUFZGc3hBcQ==',
      'Content-Type' : 'application/json'
    });

    // return this.http.post('https://api.payzen.lat/api-payment/V4/Charge/CreatePayment', body, {headers: headers}, )
    console.log('Esto llega al servicio',payzenCreatePaymentRequest);

    return this.http.post('/api-payment/V4/Charge/CreatePayment', payzenCreatePaymentRequest, {headers: headers}, )
            .pipe(
              map ( (resp:any) => {
                console.log('resp-payzen',resp);
                return resp;
              })
            );
    
  }
  
}
