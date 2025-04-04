/* eslint-disable @typescript-eslint/no-namespace */

/** This file is generated by json-schema-generator.js program **/

import { components } from './openapi'

export namespace Types {
  export type PartyIdType = components['schemas']['PartyIdType']
  export type PartyIdentifier = components['schemas']['PartyIdentifier']
  export type PartySubIdOrType = components['schemas']['PartySubIdOrType']
  export type Currency = components['schemas']['Currency']
  export type accountsRequest = components['schemas']['accountsRequest']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type errorResponse = components['schemas']['errorResponse']
  export type accountCreationStatus = components['schemas']['accountCreationStatus']
  export type accountsCreationState = components['schemas']['accountsCreationState']
  export type ErrorCode = components['schemas']['ErrorCode']
  export type ErrorDescription = components['schemas']['ErrorDescription']
  export type ExtensionKey_v2_1_0 = components['schemas']['ExtensionKey_v2_1_0']
  export type ExtensionValue = components['schemas']['ExtensionValue']
  export type Extension_v2_1_0 = components['schemas']['Extension_v2_1_0']
  export type ExtensionList_v2_1_0 = components['schemas']['ExtensionList_v2_1_0']
  export type ErrorInformation = components['schemas']['ErrorInformation']
  export type mojaloopError = components['schemas']['mojaloopError']
  export type transferError = components['schemas']['transferError']
  export type accountsResponse = components['schemas']['accountsResponse']
  export type errorAccountsResponse = components['schemas']['errorAccountsResponse']
  export type FspId = components['schemas']['FspId']
  export type accountDeletionStatus = components['schemas']['accountDeletionStatus']
  export type accountDeletionState = components['schemas']['accountDeletionState']
  export type accountDeletionResponse = components['schemas']['accountDeletionResponse']
  export type TransactionInitiatorType = components['schemas']['TransactionInitiatorType']
  export type Name = components['schemas']['Name']
  export type FirstName = components['schemas']['FirstName']
  export type MiddleName = components['schemas']['MiddleName']
  export type LastName = components['schemas']['LastName']
  export type DateOfBirth = components['schemas']['DateOfBirth']
  export type MerchantClassificationCode = components['schemas']['MerchantClassificationCode']
  export type KYCInformation = components['schemas']['KYCInformation']
  export type extensionListEmptiable = components['schemas']['extensionListEmptiable']
  export type transferParty = components['schemas']['transferParty']
  export type AmountType = components['schemas']['AmountType']
  export type Amount = components['schemas']['Amount']
  export type transferTransactionType = components['schemas']['transferTransactionType']
  export type TransactionSubScenario = components['schemas']['TransactionSubScenario']
  export type Note = components['schemas']['Note']
  export type individualQuote = components['schemas']['individualQuote']
  export type bulkQuoteRequest = components['schemas']['bulkQuoteRequest']
  export type DateTime = components['schemas']['DateTime']
  export type bulkTransferStatus = components['schemas']['bulkTransferStatus']
  export type Money = components['schemas']['Money']
  export type Latitude = components['schemas']['Latitude']
  export type Longitude = components['schemas']['Longitude']
  export type GeoCode = components['schemas']['GeoCode']
  export type IlpPacket = components['schemas']['IlpPacket']
  export type IlpCondition = components['schemas']['IlpCondition']
  export type quoteError = components['schemas']['quoteError']
  export type individualQuoteResult = components['schemas']['individualQuoteResult']
  export type bulkQuoteResponse = components['schemas']['bulkQuoteResponse']
  export type bulkQuoteErrorResponse = components['schemas']['bulkQuoteErrorResponse']
  export type bulkQuoteStatus = components['schemas']['bulkQuoteStatus']
  export type bulkQuoteStatusResponse = components['schemas']['bulkQuoteStatusResponse']
  export type autoAcceptPartyOption = components['schemas']['autoAcceptPartyOption']
  export type bulkPerTransferFeeLimit = components['schemas']['bulkPerTransferFeeLimit']
  export type autoAcceptQuote = components['schemas']['autoAcceptQuote']
  export type bulkTransactionOptions = components['schemas']['bulkTransactionOptions']
  export type PartyIdInfo = components['schemas']['PartyIdInfo']
  export type PartyName = components['schemas']['PartyName']
  export type PartyComplexName = components['schemas']['PartyComplexName']
  export type PartyPersonalInfo = components['schemas']['PartyPersonalInfo']
  export type Party = components['schemas']['Party']
  export type bulkTransactionIndividualTransfer = components['schemas']['bulkTransactionIndividualTransfer']
  export type bulkTransactionRequest = components['schemas']['bulkTransactionRequest']
  export type TransferState = components['schemas']['TransferState']
  export type IlpFulfilment = components['schemas']['IlpFulfilment']
  export type individualTransferResult = components['schemas']['individualTransferResult']
  export type bulkTransferResponse = components['schemas']['bulkTransferResponse']
  export type bulkTransferErrorResponse = components['schemas']['bulkTransferErrorResponse']
  export type bulkTransactionIndividualTransferAccept = components['schemas']['bulkTransactionIndividualTransferAccept']
  export type transferContinuationAcceptParty = components['schemas']['transferContinuationAcceptParty']
  export type bulkTransactionContinuationAcceptParty = components['schemas']['bulkTransactionContinuationAcceptParty']
  export type transferContinuationAcceptQuote = components['schemas']['transferContinuationAcceptQuote']
  export type bulkTransactionContinuationAcceptQuote = components['schemas']['bulkTransactionContinuationAcceptQuote']
  export type partyError = components['schemas']['partyError']
  export type bulkTransactionAcceptPartyErrorResponse = components['schemas']['bulkTransactionAcceptPartyErrorResponse']
  export type bulkTransactionAcceptQuoteErrorResponse = components['schemas']['bulkTransactionAcceptQuoteErrorResponse']
  export type individualTransfer = components['schemas']['individualTransfer']
  export type bulkTransferRequest = components['schemas']['bulkTransferRequest']
  export type individualTransferFulfilment = components['schemas']['individualTransferFulfilment']
  export type bulkTransferStatusResponse = components['schemas']['bulkTransferStatusResponse']
  export type async2SyncCurrentState = components['schemas']['async2SyncCurrentState']
  export type partiesByIdResponse = components['schemas']['partiesByIdResponse']
  export type TransactionScenario = components['schemas']['TransactionScenario']
  export type TransactionInitiator = components['schemas']['TransactionInitiator']
  export type RefundReason = components['schemas']['RefundReason']
  export type Refund = components['schemas']['Refund']
  export type BalanceOfPayments = components['schemas']['BalanceOfPayments']
  export type TransactionType = components['schemas']['TransactionType']
  export type CurrencyConverter = components['schemas']['CurrencyConverter']
  export type FxRate = components['schemas']['FxRate']
  export type QuotesPostRequest = components['schemas']['QuotesPostRequest']
  export type simpleQuotesPostRequest = components['schemas']['simpleQuotesPostRequest']
  export type quotesPostResponse = components['schemas']['quotesPostResponse']
  export type errorQuotesResponse = components['schemas']['errorQuotesResponse']
  export type AuthenticationType = components['schemas']['AuthenticationType']
  export type requestToPayRequest = components['schemas']['requestToPayRequest']
  export type requestToPayStatus = components['schemas']['requestToPayStatus']
  export type getPartiesResponse = components['schemas']['getPartiesResponse']
  export type TransactionRequestState = components['schemas']['TransactionRequestState']
  export type TransactionRequestResponse = components['schemas']['TransactionRequestResponse']
  export type requestToPayResponse = components['schemas']['requestToPayResponse']
  export type transferStatus = components['schemas']['transferStatus']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type FxMoney = components['schemas']['FxMoney']
  export type FxCharge = components['schemas']['FxCharge']
  export type FxConversion = components['schemas']['FxConversion']
  export type FxQuotesPostOutboundResponse = components['schemas']['FxQuotesPostOutboundResponse']
  export type TransfersIDPutResponse = components['schemas']['TransfersIDPutResponse']
  export type transferResponse = components['schemas']['transferResponse']
  export type errorTransferResponse = components['schemas']['errorTransferResponse']
  export type requestToPayTransferRequest = components['schemas']['requestToPayTransferRequest']
  export type AuthenticationValue = components['schemas']['AuthenticationValue']
  export type AuthenticationInfo = components['schemas']['AuthenticationInfo']
  export type AuthorizationResponseType = components['schemas']['AuthorizationResponseType']
  export type AuthorizationIDPutResponse = components['schemas']['AuthorizationIDPutResponse']
  export type requestToPayTransferResponse = components['schemas']['requestToPayTransferResponse']
  export type transferContinuationAcceptOTP = components['schemas']['transferContinuationAcceptOTP']
  export type TransfersPostRequest = components['schemas']['TransfersPostRequest']
  export type simpleTransfersPostRequest = components['schemas']['simpleTransfersPostRequest']
  export type simpleTransfersPostResponse = components['schemas']['simpleTransfersPostResponse']
  export type errorSimpleTransfersResponse = components['schemas']['errorSimpleTransfersResponse']
  export type transferRequest = components['schemas']['transferRequest']
  export type transferStatusResponse = components['schemas']['transferStatusResponse']
  export type transferContinuationAcceptConversion = components['schemas']['transferContinuationAcceptConversion']
  export type transferContinuationAcceptQuoteOrConversion = components['schemas']['transferContinuationAcceptQuoteOrConversion']
  export type ServicesFXPPutResponse = components['schemas']['ServicesFXPPutResponse']
  export type FxQuotesPostOutboundRequest = components['schemas']['FxQuotesPostOutboundRequest']
  export type commitRequestId = components['schemas']['commitRequestId']
  export type determiningTransferId = components['schemas']['determiningTransferId']
  export type initiatingFsp = components['schemas']['initiatingFsp']
  export type counterPartyFsp = components['schemas']['counterPartyFsp']
  export type sourceAmount = components['schemas']['sourceAmount']
  export type targetAmount = components['schemas']['targetAmount']
  export type condition = components['schemas']['condition']
  export type FxTransfersPostOutboundRequest = components['schemas']['FxTransfersPostOutboundRequest']
  export type fulfilment = components['schemas']['fulfilment']
  export type completedTimestamp = components['schemas']['completedTimestamp']
  export type conversionState = components['schemas']['conversionState']
  export type FxTransfersPostOutboundResponse = components['schemas']['FxTransfersPostOutboundResponse']
}
