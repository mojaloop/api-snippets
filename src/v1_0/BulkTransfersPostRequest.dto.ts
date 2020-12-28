import { CorrelationId } from './CorrelationId.dto'
import { FspId } from './FspId.dto'
import { IndividualTransfer } from './IndividualTransfer.dto'
import { DateTime } from './DateTime.dto'
import { ExtensionList } from './ExtensionList.dto'

export class BulkTransfersPostRequest {
  bulkTransferId: CorrelationId
  bulkQuoteId: CorrelationId
  payerFsp: FspId
  payeeFsp: FspId
  individualTransfers: IndividualTransfer[]
  expiration: DateTime
  extensionList?: ExtensionList

  constructor(
    bulkTransferId: CorrelationId,
    bulkQuoteId: CorrelationId,
    payerFsp: FspId,
    payeeFsp: FspId,
    individualTransfers: IndividualTransfer[],
    expiration: DateTime,
    extensionList?: ExtensionList
  ) {
    this.bulkTransferId = bulkTransferId
    this.bulkQuoteId = bulkQuoteId
    this.payerFsp = payerFsp
    this.payeeFsp = payeeFsp
    this.individualTransfers = [...(individualTransfers || [])]
    this.expiration = expiration
    this.extensionList = extensionList
  }
}