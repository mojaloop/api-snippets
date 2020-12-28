import { DateTime } from './DateTime.dto'
import { IndividualTransferResult } from './IndividualTransferResult.dto'
import { BulkTransferState } from './BulkTransferState.dto'
import { ExtensionList } from './ExtensionList.dto'

export class BulkTransfersIDPutResponse {
  bulkTransferState: BulkTransferState
  completedTimestamp?: DateTime
  individualTransferResults?: IndividualTransferResult[]
  extensionList?: ExtensionList

  constructor(
    bulkTransferState: BulkTransferState,
    completedTimestamp?: DateTime,
    individualTransferResults?: IndividualTransferResult[],
    extensionList?: ExtensionList
  ) {
    this.bulkTransferState = bulkTransferState
    this.completedTimestamp = completedTimestamp
    this.individualTransferResults = [...(individualTransferResults || [])]
    this.extensionList = extensionList
  }
}
