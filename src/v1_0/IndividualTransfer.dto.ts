import { CorrelationId } from './CorrelationId.dto'
import { Money } from './Money.dto'
import { IlpPacket } from './IlpPacket.dto'
import { IlpCondition } from './IlpCondition.dto'
import { ExtensionList } from './ExtensionList.dto'

export class IndividualTransfer {
  transferId: CorrelationId
  transferAmount: Money
  ilpPacket: IlpPacket
  condition: IlpCondition
  extensionList?: ExtensionList

  constructor(
    transferId: CorrelationId,
    transferAmount: Money,
    ilpPacket: IlpPacket,
    condition: IlpCondition,
    extensionList?: ExtensionList  
  ) {
    this.transferId = transferId
    this.transferAmount = transferAmount
    this.ilpPacket = ilpPacket
    this.condition = condition
    this.extensionList = extensionList
  }
}
