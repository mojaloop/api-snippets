import { Amount } from './Amount.dto'
import { Currency } from './Currency.dto'


export class Money {
  amount: Amount
  currency: Currency

  constructor(amount: Amount, currency: Currency) {
    this.amount = amount
    this.currency = currency
  }
}