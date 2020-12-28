import { FspId } from './FspId.dto'
import { Currency } from './Currency.dto'

export class ParticipantsTypeIDSubIDPostRequest {
  fspId: FspId
  currency?: Currency

  constructor(
    fspId: FspId,
    currency?: Currency
  ) {
    this.fspId = fspId
    this.currency = currency
  }
}
