import { ErrorInformation } from './ErrorInformation.dto'

export class ErrorInformationObject {
  errorInformation: ErrorInformation
  
  constructor(errorInformation: ErrorInformation) {
    this.errorInformation = errorInformation
  }
}
