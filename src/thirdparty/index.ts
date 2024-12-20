/* eslint-disable @typescript-eslint/no-namespace */

import { components } from './openapi'
export * as openapi from './openapi'

export namespace Schemas {
  export type Account = components['schemas']['Account']
  export type AccountAddress = components['schemas']['AccountAddress']
  export type AccountsIDPutResponse = components['schemas']['AccountsIDPutResponse']
  export type Amount = components['schemas']['Amount']
  export type AmountType = components['schemas']['AmountType']
  export type AuthenticationResponse = components['schemas']['AuthenticationResponse']
  export type AuthorizationResponseType = components['schemas']['AuthorizationResponseType']
  export type BalanceOfPayments = components['schemas']['BalanceOfPayments']
  export type BinaryString = components['schemas']['BinaryString']
  export type ConsentRequestChannelType = components['schemas']['ConsentRequestChannelType']
  export type ConsentRequestChannelTypeOTP = components['schemas']['ConsentRequestChannelTypeOTP']
  export type ConsentRequestChannelTypeWeb = components['schemas']['ConsentRequestChannelTypeWeb']
  export type ConsentRequestsIDPatchRequest = components['schemas']['ConsentRequestsIDPatchRequest']
  export type ConsentRequestsIDPutResponseOTP = components['schemas']['ConsentRequestsIDPutResponseOTP']
  export type ConsentRequestsIDPutResponseWeb = components['schemas']['ConsentRequestsIDPutResponseWeb']
  export type ConsentRequestsPostRequest = components['schemas']['ConsentRequestsPostRequest']
  export type ConsentsIDPatchResponseRevoked = components['schemas']['ConsentsIDPatchResponseRevoked']
  export type ConsentsIDPatchResponseVerified = components['schemas']['ConsentsIDPatchResponseVerified']
  export type ConsentsIDPutResponseSigned = components['schemas']['ConsentsIDPutResponseSigned']
  export type ConsentsIDPutResponseVerified = components['schemas']['ConsentsIDPutResponseVerified']
  export type ConsentsPostRequestAUTH = components['schemas']['ConsentsPostRequestAUTH']
  export type ConsentsPostRequestPISP = components['schemas']['ConsentsPostRequestPISP']
  export type ConsentStatusRevoked = components['schemas']['ConsentStatusRevoked']
  export type ConsentStatusIssued = components['schemas']['ConsentStatusIssued']
  export type ConsentStatus = ConsentStatusRevoked | ConsentStatusIssued
  export type CorrelationId = components['schemas']['CorrelationId']
  export type CredentialStatusVerified = components['schemas']['CredentialStatusVerified']
  export type CredentialStatusPending = components['schemas']['CredentialStatusPending']
  export type CredentialStatus = CredentialStatusVerified | CredentialStatusPending
  export type CredentialType = components['schemas']['CredentialType']
  export type Currency = components['schemas']['Currency']
  export type DateOfBirth = components['schemas']['DateOfBirth']
  export type DateTime = components['schemas']['DateTime']
  export type ErrorCode = components['schemas']['ErrorCode']
  export type ErrorDescription = components['schemas']['ErrorDescription']
  export type ErrorInformation = components['schemas']['ErrorInformation']
  export type ErrorInformationResponse = components['schemas']['ErrorInformationResponse']
  export type Extension = components['schemas']['Extension']
  export type ExtensionKey = components['schemas']['ExtensionKey']
  export type ExtensionList = components['schemas']['ExtensionList']
  export type ExtensionValue = components['schemas']['ExtensionValue']
  export type FirstName = components['schemas']['FirstName']
  export type FspId = components['schemas']['FspId']
  export type GeoCode = components['schemas']['GeoCode']
  export type IlpCondition = components['schemas']['IlpCondition']
  export type IlpFulfilment = components['schemas']['IlpFulfilment']
  export type IlpPacket = components['schemas']['IlpPacket']
  export type Integer = components['schemas']['Integer']
  export type LastName = components['schemas']['LastName']
  export type Latitude = components['schemas']['Latitude']
  export type Longitude = components['schemas']['Longitude']
  export type MerchantClassificationCode = components['schemas']['MerchantClassificationCode']
  export type MiddleName = components['schemas']['MiddleName']
  export type Money = components['schemas']['Money']
  export type Name = components['schemas']['Name']
  export type Note = components['schemas']['Note']
  export type ParticipantsIDPutResponse = components['schemas']['ParticipantsIDPutResponse']
  export type ParticipantsPostRequest = components['schemas']['ParticipantsPostRequest']
  export type ParticipantsTypeIDPutResponse = components['schemas']['ParticipantsTypeIDPutResponse']
  export type ParticipantsTypeIDSubIDPostRequest = components['schemas']['ParticipantsTypeIDSubIDPostRequest']
  export type PartiesTypeIDPutResponse = components['schemas']['PartiesTypeIDPutResponse']
  export type Party = components['schemas']['Party']
  export type PartyComplexName = components['schemas']['PartyComplexName']
  export type PartyIdentifier = components['schemas']['PartyIdentifier']
  export type PartyIdInfo = components['schemas']['PartyIdInfo']
  export type PartyIdInfoTPLink = components['schemas']['PartyIdInfoTPLink']
  export type PartyIdType = components['schemas']['PartyIdType']
  export type PartyIdTypeTPLink = components['schemas']['PartyIdTypeTPLink']
  export type PartyName = components['schemas']['PartyName']
  export type FIDOPublicKeyCredentialAssertion = components['schemas']['FIDOPublicKeyCredentialAssertion']
  export type FIDOPublicKeyCredentialAttestation = components['schemas']['FIDOPublicKeyCredentialAttestation']
  export type GenericCredential = components['schemas']['GenericCredential']
  export type PartyPersonalInfo = components['schemas']['PartyPersonalInfo']
  export type PartyResult = components['schemas']['PartyResult']
  export type PartySubIdOrType = components['schemas']['PartySubIdOrType']
  export type QuotesIDPostRequest = components['schemas']['QuotesPostRequest']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type Refund = components['schemas']['Refund']
  export type RefundReason = components['schemas']['RefundReason']
  export type Scope = components['schemas']['Scope']
  export type ScopeAction = components['schemas']['ScopeAction']
  export type ServicesServiceTypePutResponse = components['schemas']['ServicesServiceTypePutResponse']
  export type ServiceType = components['schemas']['ServiceType']
  export type SignedCredential = components['schemas']['SignedCredential']
  export type ThirdpartyRequestsTransactionsIDPatchResponse =
    components['schemas']['ThirdpartyRequestsTransactionsIDPatchResponse']
  export type ThirdpartyRequestsTransactionsIDPutResponse =
    components['schemas']['ThirdpartyRequestsTransactionsIDPutResponse']
  export type ThirdpartyRequestsTransactionsPostRequest =
    components['schemas']['ThirdpartyRequestsTransactionsPostRequest']
  export type ThirdpartyRequestsAuthorizationsPostRequest =
    components['schemas']['ThirdpartyRequestsAuthorizationsPostRequest']
  export type ThirdpartyRequestsAuthorizationsIDPutResponseRejected =
    components['schemas']['ThirdpartyRequestsAuthorizationsIDPutResponseRejected']
  export type ThirdpartyRequestsAuthorizationsIDPutResponseFIDO =
    components['schemas']['ThirdpartyRequestsAuthorizationsIDPutResponseFIDO']
  export type ThirdpartyRequestsAuthorizationsIDPutResponseGeneric =
    components['schemas']['ThirdpartyRequestsAuthorizationsIDPutResponseGeneric']
  export type ThirdpartyRequestsAuthorizationsIDPutResponse =
    | ThirdpartyRequestsAuthorizationsIDPutResponseRejected
    | ThirdpartyRequestsAuthorizationsIDPutResponseFIDO
    | ThirdpartyRequestsAuthorizationsIDPutResponseGeneric
  export type ThirdpartyRequestsVerificationsIDPutResponse =
    components['schemas']['ThirdpartyRequestsVerificationsIDPutResponse']
  export type ThirdpartyRequestsVerificationsPostRequestFIDO =
    components['schemas']['ThirdpartyRequestsVerificationsPostRequestFIDO']
  export type ThirdpartyRequestsVerificationsPostRequestGeneric =
    components['schemas']['ThirdpartyRequestsVerificationsPostRequestGeneric']
  export type ThirdpartyRequestsVerificationsPostRequest =
    | ThirdpartyRequestsVerificationsPostRequestFIDO
    | ThirdpartyRequestsVerificationsPostRequestGeneric
  export type TransactionInitiator = components['schemas']['TransactionInitiator']
  export type TransactionInitiatorType = components['schemas']['TransactionInitiatorType']
  export type TransactionRequestState = components['schemas']['TransactionRequestState']
  export type TransactionScenario = components['schemas']['TransactionScenario']
  export type TransactionState = components['schemas']['TransactionState']
  export type TransactionSubScenario = components['schemas']['TransactionSubScenario']
  export type TransactionType = components['schemas']['TransactionType']
  export type VerifiedCredential = components['schemas']['VerifiedCredential']
}
