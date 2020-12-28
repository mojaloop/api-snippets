import { CorrelationId } from './CorrelationId.dto'
import { TransactionRequestState } from './TransactionRequestState.dto'
import { ExtensionList } from './ExtensionList.dto'

export class TransactionRequestsIDPutResponse {
  transactionRequestState: TransactionRequestState
  transactionId?: CorrelationId
  extensionList?: ExtensionList

  constructor(
    transactionRequestState: TransactionRequestState,
    transactionId?: CorrelationId,
    extensionList?: ExtensionList
  ) {
    this.transactionRequestState = transactionRequestState
    this.transactionId = transactionId
    this.extensionList = extensionList
  }
}
