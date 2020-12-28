import { Party } from './Party.dto'

export class PartiesTypeIDPutResponse {
  party: Party

  constructor(party: Party) {
    this.party = party
  }
}
