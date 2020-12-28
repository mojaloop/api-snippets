import { PartyResult } from './PartyResult.dto'
import { Currency } from './Currency.dto'

export class ParticipantsIDPutResponse {
  partyList: PartyResult[]
  currency?: Currency

  constructor(
    partyList: PartyResult[],
    currency?: Currency      
  ) {
    this.partyList = [...partyList]
    this.currency = currency
  }
}
