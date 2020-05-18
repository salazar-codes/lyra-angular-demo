import { Component, OnInit } from "@angular/core";
import KRGlue from "@lyracom/embedded-form-glue";

import { PayzenService } from '../services/payzen.service';

import { PayzenCreatePaymentRequestModel } from '../services/payzen-createpayment-request';

@Component({
  selector: 'app-form-payzen',
  templateUrl: './form-payzen.component.html',
  styleUrls: ['./form-payzen.component.css']
})
export class FormPayzenComponent implements OnInit {

  title = 'lyra-angular';
  payzenCreatePaymentRequest: PayzenCreatePaymentRequestModel;
  formToken: string;

  constructor( public _payzenService: PayzenService ){
  }

  ngOnInit() {

    const endpoint = "";
    const publicKey = "";
    // const formToken = "DEMO-TOKEN-TO-BE-REPLACED";
    
    console.log('ESTO SE ENVÍA',this.payzenCreatePaymentRequest);

    this.payzenCreatePaymentRequest = new PayzenCreatePaymentRequestModel();
    this.payzenCreatePaymentRequest.amount = 55,22;
    this.payzenCreatePaymentRequest.orderId = '342342344443';
    this.payzenCreatePaymentRequest.customer = { 'email': 'jsalazar@gmai.com' };

    this._payzenService.createPayment(this.payzenCreatePaymentRequest).subscribe(

      resp => {
         console.log('CREANDO PAGO PAYZEN EN FORM PAPÁ',resp);
         this.formToken = resp.answer.formToken;
          
         //CARGANDO EL FORMULARIO QUE ESTÁ EN EL EJEMPLO POR DEFECTO
         KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
          .then(({ KR }) =>
            KR.setFormConfig({
              /* set the minimal configuration */
              formToken: this.formToken,
              // popin: false,
              // "kr-language": "en-US" /* to update initialization parameter */
              "kr-language": "es-PE", /* to update initialization parameter */
              "kr-post-url-success": "sucess" /* PARAMETRO QUE NO ESTÁ EN LA DOCUMENTACIÓN*/
            })
          )
          .then(({ KR }) =>
            KR.addForm("#myPaymentForm")
          ) /* add a payment form  to myPaymentForm div*/
          .then(({ KR, result }) =>
            KR.showForm(result.formId)
          ); /* show the payment form */

     },
     error => {
       // Error cuando no hay comunicación con el servicio
       console.log('Error PAYZEN',error);
   });

  }

}
