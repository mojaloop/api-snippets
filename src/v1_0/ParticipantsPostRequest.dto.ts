import { CorrelationId } from './CorrelationId.dto'
import { PartyIdInfo } from './PartyIdInfo.dto'
import { Currency } from './Currency.dto'

export class ParticipantsPostRequest {
  requestId: CorrelationId
  partyList: PartyIdInfo[]
  currency?: Currency

  constructor(
    requestId: CorrelationId,
    partyList: PartyIdInfo[],
    currency?: Currency  
  ) {
    this.requestId = requestId
    this.partyList = [...partyList]
    this.currency = currency
  }  
}
