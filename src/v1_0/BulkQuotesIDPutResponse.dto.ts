import { IndividualQuoteResult } from './IndividualQuoteResult.dto'
import { DateTime } from './DateTime.dto'
import { ExtensionList } from './ExtensionList.dto'

export class BulkQuotesIDPutResponse {
  expiration: DateTime
  individualQuoteResults?: IndividualQuoteResult[]
  extensionList?: ExtensionList

  constructor(
    expiration: DateTime,
    individualQuoteResults?: IndividualQuoteResult[],
    extensionList?: ExtensionList  
  ) {
    this.expiration = expiration
    this.individualQuoteResults = [...(individualQuoteResults || [])]
    this.extensionList = extensionList
  }
}
