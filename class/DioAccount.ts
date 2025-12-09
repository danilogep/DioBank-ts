export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce depositou')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  protected validarStatus = (): boolean => {
    return this.validateStatus()
  }

  protected alterarSaldo = (valor: number): void => {
    this.balance += valor
  }
}