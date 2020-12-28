import { AuthenticationType } from './AuthenticationType.dto'
import { AuthenticationValue } from './AuthenticationValue.dto'

export class AuthenticationInfo {
  authentication: AuthenticationType
  authenticationValue: AuthenticationValue

  constructor(
    authentication: AuthenticationType,
    authenticationValue: AuthenticationValue
  ) {
    this.authentication = authentication
    this.authenticationValue = authenticationValue
  }
}
