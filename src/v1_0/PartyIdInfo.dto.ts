import { PartyIdType } from './PartyIdType.dto'
import { PartyIdentifier } from './PartyIdentifier.dto'
import { PartySubIdOrType } from './PartySubIdOrType.dto'
import { FspId } from './FspId.dto'

export class PartyIdInfo {
  partyIdType: PartyIdType
  partyIdentifier: PartyIdentifier
  partySubIdOrType?: PartySubIdOrType
  fspId?: FspId

  constructor(
    partyIdType: PartyIdType,
    partyIdentifier: PartyIdentifier,
    partySubIdOrType?: PartySubIdOrType,
    fspId?: FspId
  ) {
    this.partyIdType = partyIdType
    this.partyIdentifier = partyIdentifier
    this.partySubIdOrType = partySubIdOrType
    this.fspId = fspId
  }
}
