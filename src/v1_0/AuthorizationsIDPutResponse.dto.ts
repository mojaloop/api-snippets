import { AuthenticationInfo } from './AuthenticationInfo.dto'
import { AuthorizationResponse } from './AuthorizationResponse.dto'

export class AuthorizationsIDPutResponse {
  responseType: AuthorizationResponse
  authenticationInfo?: AuthenticationInfo

  constructor(
    responseType: AuthorizationResponse,
    authenticationInfo?: AuthenticationInfo
  ) {
    this.responseType = responseType
    this.authenticationInfo = authenticationInfo
  }
}
