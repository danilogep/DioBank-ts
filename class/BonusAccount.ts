import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.validarStatus()){
      this.alterarSaldo(value + 10)
      console.log('Voce depositou com bônus')
    }
  }
}