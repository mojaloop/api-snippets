import { PartyIdInfo } from './PartyIdInfo.dto'
import { ErrorInformation } from './ErrorInformation.dto'

export class PartyResult {
  partyId: PartyIdInfo
  errorInformation?: ErrorInformation

  constructor(
    partyId: PartyIdInfo,
    errorInformation?: ErrorInformation  
  ) {
    this.partyId = partyId
    this.errorInformation = errorInformation
  }
}
