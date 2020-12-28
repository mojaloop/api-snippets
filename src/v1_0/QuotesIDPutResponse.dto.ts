import { DateTime } from './DateTime.dto'
import { GeoCode } from './GeoCode.dto'
import { IlpPacket } from './IlpPacket.dto'
import { IlpCondition } from './IlpCondition.dto'
import { Money } from './Money.dto'
import { ExtensionList } from './ExtensionList.dto'

export class QuotesIDPutResponse {
  transferAmount: Money
  expiration: DateTime
  ilpPacket: IlpPacket
  condition: IlpCondition
  payeeReceiveAmount?: Money
  payeeFspFee?: Money
  payeeFspCommission?: Money
  geoCode?: GeoCode
  extensionList?: ExtensionList

  constructor(
    transferAmount: Money,
    expiration: DateTime,
    ilpPacket: IlpPacket,
    condition: IlpCondition,
    payeeReceiveAmount?: Money, payeeFspFee?: Money, payeeFspCommission?: Money,
    geoCode?: GeoCode, extensionList?: ExtensionList
  ) {
    this.transferAmount = transferAmount
    this.expiration = expiration
    this.ilpPacket = ilpPacket
    this.condition = condition

    this.payeeReceiveAmount = payeeReceiveAmount
    this.payeeFspFee = payeeFspFee
    this.payeeFspCommission = payeeFspCommission
    
    this.geoCode = geoCode
    this.extensionList = extensionList
  }
}