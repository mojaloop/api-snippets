import { CorrelationId } from './CorrelationId.dto'
import { Party } from './Party.dto'
import { Money } from './Money.dto'
import { TransactionType } from './TransactionType.dto'
import { Note } from './Note.dto'
import { ExtensionList } from './ExtensionList.dto'

export class Transaction {
  transactionId: CorrelationId
  quoteId: CorrelationId
  payee: Party
  payer: Party
  amount: Money
  transactionType: TransactionType
  note?: Note
  extensionList?: ExtensionList

  constructor(
    transactionId: CorrelationId,
    quoteId: CorrelationId,
    payee: Party,
    payer: Party,
    amount: Money,
    transactionType: TransactionType,
    note?: Note,
    extensionList?: ExtensionList
  ) {
    this.transactionId = transactionId
    this.quoteId = quoteId
    this.payee = payee
    this.payer = payer
    this.amount = amount
    this.transactionType = transactionType
    this.note = note
    this.extensionList = extensionList
  }
}
