import { CorrelationId } from './CorrelationId.dto'
import { Party } from './Party.dto'
import { Money } from './Money.dto'
import { IlpPacket } from './IlpPacket.dto'
import { IlpCondition } from './IlpCondition.dto'
import { ErrorInformation } from './ErrorInformation.dto'
import { ExtensionList } from './ExtensionList.dto'

export class IndividualQuoteResult {
  quoteId: CorrelationId
  payee?: Party
  transferAmount?: Money
  payeeReceiveAmount?: Money
  payeeFspFee?: Money
  payeeFspCommission?: Money
  ilpPacket?: IlpPacket
  condition?: IlpCondition
  errorInformation?: ErrorInformation
  extensionList?: ExtensionList

  constructor(
    quoteId: CorrelationId,
    payee?: Party,
    transferAmount?: Money,
    payeeReceiveAmount?: Money,
    payeeFspFee?: Money,
    payeeFspCommission?: Money,
    ilpPacket?: IlpPacket,
    condition?: IlpCondition,
    errorInformation?: ErrorInformation,
    extensionList?: ExtensionList
  ) {
    this.quoteId = quoteId
    this.payee = payee
    this.transferAmount = transferAmount
    this.payeeReceiveAmount = payeeReceiveAmount
    this.payeeFspFee = payeeFspFee
    this.payeeFspCommission = payeeFspCommission
    this.ilpPacket = ilpPacket
    this.condition = condition
    this.errorInformation = errorInformation
    this.extensionList = extensionList
  }
}
