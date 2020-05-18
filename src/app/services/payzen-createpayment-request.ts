export class PayzenCreatePaymentRequestModel{

    // formToken: string;
    amount: number;
    currency: string = 'PEN';
    orderId:  string;
    more: string = 'parameters';
    customer: {
        email: string
    }
    
}