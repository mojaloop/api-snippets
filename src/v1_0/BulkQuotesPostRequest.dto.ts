import { CorrelationId } from './CorrelationId.dto'
import { Party } from './Party.dto'
import { GeoCode } from './GeoCode.dto'
import { DateTime } from './DateTime.dto'
import { IndividualQuote } from './IndividualQuote.dto'
import { ExtensionList } from './ExtensionList.dto'

export class BulkQuotesPostRequest {
  bulkQuoteId: CorrelationId
  payer: Party
  individualQuotes: IndividualQuote[]
  geoCode?: GeoCode
  expiration?: DateTime
  extensionList?: ExtensionList

  constructor(
    bulkQuoteId: CorrelationId,
    payer: Party,
    individualQuotes: IndividualQuote[],
    geoCode?: GeoCode,
    expiration?: DateTime,
    extensionList?: ExtensionList
  ) {
    this.bulkQuoteId = bulkQuoteId
    this.payer = payer
    this.individualQuotes = [...individualQuotes]
    this.geoCode = geoCode
    this.expiration = expiration
    this.extensionList = extensionList
  }
}
