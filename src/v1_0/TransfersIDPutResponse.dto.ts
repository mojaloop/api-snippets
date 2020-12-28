import { IlpFulfilment } from './IlpFulfilment.dto'
import { DateTime } from './DateTime.dto'
import { TransferState } from './TransferState.dto'
import { ExtensionList } from './ExtensionList.dto'

export class TransfersIDPutResponse {
  transferState: TransferState
  fulfilment?: IlpFulfilment
  completedTimestamp?: DateTime
  extensionList?: ExtensionList

  constructor(
    transferState: TransferState,
    fulfilment?: IlpFulfilment,
    completedTimestamp?: DateTime,
    extensionList?: ExtensionList
  ) {
    this.transferState = transferState
    this.fulfilment = fulfilment
    this.completedTimestamp = completedTimestamp
    this.extensionList = extensionList
  }
}