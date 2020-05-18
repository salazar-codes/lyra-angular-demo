import { Component, OnInit } from "@angular/core";
import KRGlue from "@lyracom/embedded-form-glue";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    
  }
  
  constructor(){
  }

  // title = 'lyra-angular';

  // ngOnInit() {
  //   // const endpoint = "https://api.payzen.lat";
  //   // const publicKey = "50156632:testpublickey_BxvG8ICK4mjWAyhY2IPePXQfW0moalef6HCZUlFqSXX4k";

  //   const endpoint = "https://api.payzen.lat";
  //   const publicKey = "50156632:testpublickey_BxvG8ICK4mjWAyhY2IPePXQfW0moalef6HCZUlFqSXX4k";
  //   // const publicKey = "Njk4NzYzNTc6dGVzdHB1YmxpY2tleV9ERU1PUFVCTElDS0VZOTVtZTkyNTk3ZmQyOHRHRDRyNQ==";
  //   const formToken = "DEMO-TOKEN-TO-BE-REPLACED";

  //   KRGlue.loadLibrary(endpoint, publicKey) /* Load the remote library */
  //     .then(({ KR }) =>
  //       KR.setFormConfig({
  //         /* set the minimal configuration */
  //         formToken: formToken,
  //         popin: false,
  //         // "kr-language": "en-US" /* to update initialization parameter */
  //         "kr-language": "es-PE", /* to update initialization parameter */
  //         "kr-post-url-success": ""
  //       })
  //     )
  //     .then(({ KR }) =>
  //       KR.addForm("#myPaymentForm")
  //     ) /* add a payment form  to myPaymentForm div*/
  //     .then(({ KR, result }) =>
  //       KR.showForm(result.formId)
  //     ); /* show the payment form */
  // }
}