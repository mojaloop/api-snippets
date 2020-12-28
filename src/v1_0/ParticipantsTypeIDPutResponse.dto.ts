import { FspId } from './FspId.dto'

export class ParticipantsTypeIDPutResponse {
  fspId?: FspId

  constructor(fspId?: FspId) {
    this.fspId = fspId
  }
}