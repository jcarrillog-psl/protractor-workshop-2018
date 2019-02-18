import { $, ElementFinder, promise } from 'protractor' ;

export class BankPaymentPage {
    private get bankPayment(): ElementFinder;
	constructor{
      this.bankPayment = $( '#cart_navigation > button > span' );
    }
    public async goToBankPayment(): promise.Promise<void> {
      await  this.bankPayment.click();
    }
}
