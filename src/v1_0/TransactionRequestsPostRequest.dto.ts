import { CorrelationId } from './CorrelationId.dto'
import { Party } from './Party.dto'
import { Money } from './Money.dto'
import { TransactionType } from './TransactionType.dto'
import { Note } from './Note.dto'
import { GeoCode } from './GeoCode.dto'
import { AuthenticationType } from './AuthenticationType.dto'
import { DateTime } from './DateTime.dto'
import { ExtensionList } from './ExtensionList.dto'

export class TransactionRequestsPostRequest {
  transactionRequestId: CorrelationId
  payee: Party
  payer: Party
  amount: Money
  transactionType: TransactionType
  note?: Note
  geoCode?: GeoCode
  authenticationType?: AuthenticationType
  expiration?: DateTime
  extensionList?: ExtensionList
  
  constructor(
    transactionRequestId: CorrelationId,
    payee: Party,
    payer: Party,
    amount: Money,
    transactionType: TransactionType,
    note?: Note,
    geoCode?: GeoCode,
    authenticationType?: AuthenticationType,
    expiration?: DateTime,
    extensionList?: ExtensionList
  ) {
    this.transactionRequestId = transactionRequestId
    this.payee = payee
    this.payer = payer
    this.amount = amount
    this.transactionType = transactionType
    this.note = note
    this.geoCode = geoCode
    this.authenticationType = authenticationType
    this.expiration = expiration
    this.extensionList = extensionList
  }
}
