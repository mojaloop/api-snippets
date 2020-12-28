import { ErrorCode } from './ErrorCode.dto'
import { ErrorDescription } from './ErrorDescription.dto'
import { ExtensionList } from './ExtensionList.dto'

export class ErrorInformation {
  errorCode: ErrorCode
  errorDescription: ErrorDescription
  extensionList?: ExtensionList

  constructor(
    errorCode: ErrorCode,
    errorDescription: ErrorDescription,
    extensionList?: ExtensionList
  ) {
    this.errorCode = errorCode
    this.errorDescription = errorDescription
    this.extensionList = extensionList
  }
}
