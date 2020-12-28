import { ErrorInformation } from './ErrorInformation.dto'

export class ErrorInformationResponse {
  errorInformation?: ErrorInformation

  constructor(errorInformation?: ErrorInformation) {
    this.errorInformation = errorInformation
  }
}
