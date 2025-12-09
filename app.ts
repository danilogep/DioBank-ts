import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

// PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('--- People Account ---')
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance() // 50

// CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('\n--- Company Account ---')
companyAccount.deposit(200)
companyAccount.getLoan(1000)
companyAccount.getBalance() // 1200

// BonusAccount
const bonusAccount: BonusAccount = new BonusAccount('Bonus User', 30)
console.log('\n--- Bonus Account ---')
bonusAccount.deposit(100)
bonusAccount.getBalance() // 110