import { CorrelationId } from './CorrelationId.dto'
import { IlpFulfilment } from './IlpFulfilment.dto'
import { ErrorInformation } from './ErrorInformation.dto'
import { ExtensionList } from './ExtensionList.dto'

export class IndividualTransferResult { 
  transferId: CorrelationId
  fulfilment?: IlpFulfilment
  errorInformation?: ErrorInformation
  extensionList?: ExtensionList

  constructor(
    transferId: CorrelationId,
    fulfilment?: IlpFulfilment,
    errorInformation?: ErrorInformation,
    extensionList?: ExtensionList
  ) {
    this.transferId = transferId
    this.fulfilment = fulfilment
    this.errorInformation = errorInformation
    this.extensionList = extensionList
  }
}
