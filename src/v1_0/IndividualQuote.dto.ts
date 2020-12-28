import { CorrelationId } from './CorrelationId.dto'
import { Party } from './Party.dto'
import { AmountType } from './AmountType.dto'
import { Money } from './Money.dto'
import { TransactionType } from './TransactionType.dto'
import { Note } from './Note.dto'
import { ExtensionList } from './ExtensionList.dto'

export class IndividualQuote {
  quoteId: CorrelationId
  transactionId: CorrelationId
  payee: Party
  amountType: AmountType
  amount: Money
  transactionType: TransactionType
  fees?: Money
  note?: Note
  extensionList?: ExtensionList

  constructor(
    quoteId: CorrelationId,
    transactionId: CorrelationId,
    payee: Party,
    amountType: AmountType,
    amount: Money,
    transactionType: TransactionType,
    fees?: Money,
    note?: Note,
    extensionList?: ExtensionList
  ) {
    this.quoteId = quoteId
    this.transactionId = transactionId
    this.payee = payee
    this.amountType = amountType
    this.amount = amount
    this.transactionType = transactionType
    this.fees = fees
    this.note = note
    this.extensionList = extensionList
  }
}
