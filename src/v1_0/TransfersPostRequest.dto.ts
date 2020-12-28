import { CorrelationId } from './CorrelationId.dto'
import { FspId } from './FspId.dto'
import { Money } from './Money.dto'
import { IlpPacket } from './IlpPacket.dto'
import { IlpCondition } from './IlpCondition.dto'
import { DateTime } from './DateTime.dto'
import { ExtensionList } from './ExtensionList.dto'

export class TransfersPostRequest {
  transferId: CorrelationId
  payeeFsp: FspId
  payerFsp: FspId
  amount: Money
  ilpPacket: IlpPacket
  condition: IlpCondition
  expiration: DateTime
  extensionList?: ExtensionList

  constructor(
    transferId: CorrelationId,
    payeeFsp: FspId,
    payerFsp: FspId,
    amount: Money,
    ilpPacket: IlpPacket,
    condition: IlpCondition,
    expiration: DateTime,
    extensionList?: ExtensionList
  ) {
    this.transferId = transferId
    this.payeeFsp = payeeFsp
    this.payerFsp = payerFsp
    this.amount = amount
    this.ilpPacket = ilpPacket
    this.condition = condition
    this.expiration = expiration
    this.extensionList = extensionList
  }
}