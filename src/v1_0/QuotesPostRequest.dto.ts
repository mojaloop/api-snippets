import { CorrelationId } from './CorrelationId.dto'
import { Party } from './Party.dto'
import { Money } from './Money.dto'
import { AmountType } from './AmountType.dto'
import { GeoCode } from './GeoCode.dto'
import { TransactionType } from './TransactionType.dto'
import { Note } from './Note.dto'
import { DateTime } from './DateTime.dto'
import { ExtensionList } from './ExtensionList.dto'

export class QuotesPostRequest {
  quoteId: CorrelationId
  transactionId: CorrelationId
  payee: Party
  payer: Party
  amountType: AmountType
  amount: Money
  transactionType: TransactionType
  transactionRequestId?: CorrelationId
  fees?: Money
  geoCode?: GeoCode
  note?: Note
  expiration?: DateTime
  extensionList?: ExtensionList

  constructor(
    quoteId: CorrelationId,
    transactionId: CorrelationId,
    payee: Party,
    payer: Party,
    amountType: AmountType,
    amount: Money,
    transactionType: TransactionType,
    transactionRequestId?: CorrelationId,
    fees?: Money,
    geoCode?: GeoCode,
    note?: Note,
    expiration?: DateTime,
    extensionList?: ExtensionList
  ) {
    this.quoteId = quoteId
    this.transactionId = transactionId
    this.payee = payee
    this.payer = payer
    this.amountType = amountType
    this.amount = amount
    this.transactionType = transactionType
    this.transactionRequestId = transactionRequestId
    this.fees = fees
    this.geoCode = geoCode
    this.note = note
    this.expiration = expiration
    this.extensionList = extensionList
  }
}