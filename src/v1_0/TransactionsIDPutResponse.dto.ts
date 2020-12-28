import { DateTime } from './DateTime.dto'
import { TransactionState } from './TransactionState.dto'
import { Code } from './Code.dto'
import { ExtensionList } from './ExtensionList.dto'

export class TransactionsIDPutResponse {
  transactionState: TransactionState
  completedTimestamp?: DateTime
  code?: Code
  extensionList?: ExtensionList

  constructor(
    transactionState: TransactionState,
    completedTimestamp?: DateTime,
    code?: Code,
    extensionList?: ExtensionList
  ) {
    this.transactionState = transactionState
    this.completedTimestamp = completedTimestamp
    this.code = code
    this.extensionList = extensionList
  }
}
