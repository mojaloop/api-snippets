/* eslint-disable @typescript-eslint/no-namespace */

/** This file is generated by json-schema-generator.js program **/

import { components } from './openapi'

export namespace Types {
  export type DateOfBirth = components['schemas']['DateOfBirth']
  export type FirstName = components['schemas']['FirstName']
  export type FspId = components['schemas']['FspId']
  export type IndividualQuote = components['schemas']['IndividualQuote']
  export type IndividualQuoteResultFailed = components['schemas']['IndividualQuoteResultFailed']
  export type IndividualQuoteResultSuccess = components['schemas']['IndividualQuoteResultSuccess']
  export type IndividualTransfer = components['schemas']['IndividualTransfer']
  export type IndividualTransferResult = components['schemas']['IndividualTransferResult']
  export type LastName = components['schemas']['LastName']
  export type MerchantClassificationCode = components['schemas']['MerchantClassificationCode']
  export type MiddleName = components['schemas']['MiddleName']
  export type amountCurrency = components['schemas']['amountCurrency']
  export type amountType = components['schemas']['amountType']
  export type bulkQuoteId = components['schemas']['bulkQuoteId']
  export type bulkQuoteRequest = components['schemas']['bulkQuoteRequest']
  export type bulkQuoteResponse = components['schemas']['bulkQuoteResponse']
  export type bulkTransferId = components['schemas']['bulkTransferId']
  export type bulkTransferRequest = components['schemas']['bulkTransferRequest']
  export type bulkTransferResponse = components['schemas']['bulkTransferResponse']
  export type currency = components['schemas']['currency']
  export type dateOfBirth = components['schemas']['dateOfBirth']
  export type errorCode = components['schemas']['errorCode']
  export type errorDescription = components['schemas']['errorDescription']
  export type errorInformation = components['schemas']['errorInformation']
  export type extensionItem = components['schemas']['extensionItem']
  export type extensionList = components['schemas']['extensionList']
  export type extensionListComplex = components['schemas']['extensionListComplex']
  export type fspId = components['schemas']['fspId']
  export type fulfilNotification = components['schemas']['fulfilNotification']
  export type generalError = components['schemas']['generalError']
  export type geoCode = components['schemas']['geoCode']
  export type idSubValue = components['schemas']['idSubValue']
  export type idType = components['schemas']['idType']
  export type idValue = components['schemas']['idValue']
  export type ilpPacketData = components['schemas']['ilpPacketData']
  export type initiator = components['schemas']['initiator']
  export type initiatorType = components['schemas']['initiatorType']
  export type latitude = components['schemas']['latitude']
  export type longitude = components['schemas']['longitude']
  export type money = components['schemas']['money']
  export type otpDetails = components['schemas']['otpDetails']
  export type participantsResponse = components['schemas']['participantsResponse']
  export type payerType = components['schemas']['payerType']
  export type quoteId = components['schemas']['quoteId']
  export type quoteRequest = components['schemas']['quoteRequest']
  export type quoteResponse = components['schemas']['quoteResponse']
  export type scenario = components['schemas']['scenario']
  export type timestamp = components['schemas']['timestamp']
  export type transactionId = components['schemas']['transactionId']
  export type transactionRequest = components['schemas']['transactionRequest']
  export type transactionRequestId = components['schemas']['transactionRequestId']
  export type transactionRequestResponse = components['schemas']['transactionRequestResponse']
  export type transactionRequestState = components['schemas']['transactionRequestState']
  export type transactionSubScenario = components['schemas']['transactionSubScenario']
  export type transactionType = components['schemas']['transactionType']
  export type transactionTypeObject = components['schemas']['transactionTypeObject']
  export type transferDetailsResponse = components['schemas']['transferDetailsResponse']
  export type transferId = components['schemas']['transferId']
  export type transferParty = components['schemas']['transferParty']
  export type transferRequest = components['schemas']['transferRequest']
  export type transferResponse = components['schemas']['transferResponse']
  export type transferState = components['schemas']['transferState']
  export type transferStatus = components['schemas']['transferStatus']
  export type requestToPayCallback = components['schemas']['requestToPayCallback']
  export type KYCInformation = components['schemas']['KYCInformation']
  export type TransactionSubScenario = components['schemas']['TransactionSubScenario']
  export type errorResponse = components['schemas']['errorResponse']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type bulkTransactionStatus = components['schemas']['bulkTransactionStatus']
  export type autoAcceptPartyOption = components['schemas']['autoAcceptPartyOption']
  export type Currency = components['schemas']['Currency']
  export type Amount = components['schemas']['Amount']
  export type bulkPerTransferFeeLimit = components['schemas']['bulkPerTransferFeeLimit']
  export type autoAcceptQuote = components['schemas']['autoAcceptQuote']
  export type DateTime = components['schemas']['DateTime']
  export type bulkTransactionOptions = components['schemas']['bulkTransactionOptions']
  export type PartyIdType = components['schemas']['PartyIdType']
  export type PartyIdentifier = components['schemas']['PartyIdentifier']
  export type PartySubIdOrType = components['schemas']['PartySubIdOrType']
  export type ExtensionKey_v2_1_0 = components['schemas']['ExtensionKey_v2_1_0']
  export type ExtensionValue = components['schemas']['ExtensionValue']
  export type Extension_v2_1_0 = components['schemas']['Extension_v2_1_0']
  export type ExtensionList_v2_1_0 = components['schemas']['ExtensionList_v2_1_0']
  export type PartyIdInfo = components['schemas']['PartyIdInfo']
  export type PartyName = components['schemas']['PartyName']
  export type PartyComplexName = components['schemas']['PartyComplexName']
  export type PartyPersonalInfo = components['schemas']['PartyPersonalInfo']
  export type Party = components['schemas']['Party']
  export type AmountType = components['schemas']['AmountType']
  export type Note = components['schemas']['Note']
  export type Money = components['schemas']['Money']
  export type Latitude = components['schemas']['Latitude']
  export type Longitude = components['schemas']['Longitude']
  export type GeoCode = components['schemas']['GeoCode']
  export type IlpPacket = components['schemas']['IlpPacket']
  export type IlpCondition = components['schemas']['IlpCondition']
  export type ErrorCode = components['schemas']['ErrorCode']
  export type ErrorDescription = components['schemas']['ErrorDescription']
  export type ErrorInformation = components['schemas']['ErrorInformation']
  export type mojaloopError = components['schemas']['mojaloopError']
  export type quoteError = components['schemas']['quoteError']
  export type individualQuoteResult = components['schemas']['individualQuoteResult']
  export type IlpFulfilment = components['schemas']['IlpFulfilment']
  export type TransferState = components['schemas']['TransferState']
  export type transferError = components['schemas']['transferError']
  export type individualTransferResult = components['schemas']['individualTransferResult']
  export type bulkTransactionIndividualTransferResult = components['schemas']['bulkTransactionIndividualTransferResult']
  export type bulkTransactionResponse = components['schemas']['bulkTransactionResponse']
  export type CurrencyConverter = components['schemas']['CurrencyConverter']
  export type FxRate = components['schemas']['FxRate']
  export type AuthenticationType = components['schemas']['AuthenticationType']
  export type TransferStateFromBackend = components['schemas']['TransferStateFromBackend']
  export type TransfersIDPutResponse = components['schemas']['TransfersIDPutResponse']
  export type TransfersPostRequest = components['schemas']['TransfersPostRequest']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type TransactionScenario = components['schemas']['TransactionScenario']
  export type TransactionInitiator = components['schemas']['TransactionInitiator']
  export type TransactionInitiatorType = components['schemas']['TransactionInitiatorType']
  export type RefundReason = components['schemas']['RefundReason']
  export type Refund = components['schemas']['Refund']
  export type BalanceOfPayments = components['schemas']['BalanceOfPayments']
  export type TransactionType = components['schemas']['TransactionType']
  export type QuotesPostRequest = components['schemas']['QuotesPostRequest']
  export type FxMoney = components['schemas']['FxMoney']
  export type FxCharge = components['schemas']['FxCharge']
  export type FxConversion = components['schemas']['FxConversion']
  export type FxQuotesPostBackendRequest = components['schemas']['FxQuotesPostBackendRequest']
  export type FxQuotesPostBackendResponse = components['schemas']['FxQuotesPostBackendResponse']
  export type commitRequestId = components['schemas']['commitRequestId']
  export type determiningTransferId = components['schemas']['determiningTransferId']
  export type initiatingFsp = components['schemas']['initiatingFsp']
  export type counterPartyFsp = components['schemas']['counterPartyFsp']
  export type sourceAmount = components['schemas']['sourceAmount']
  export type targetAmount = components['schemas']['targetAmount']
  export type condition = components['schemas']['condition']
  export type FxTransfersPostBackendRequest = components['schemas']['FxTransfersPostBackendRequest']
  export type fulfilment = components['schemas']['fulfilment']
  export type completedTimestamp = components['schemas']['completedTimestamp']
  export type FxTransfersPostBackendResponse = components['schemas']['FxTransfersPostBackendResponse']
  export type conversionState = components['schemas']['conversionState']
  export type FxTransfersPutBackendRequest = components['schemas']['FxTransfersPutBackendRequest']
  export type FxTransfersPatchBackendRequest = components['schemas']['FxTransfersPatchBackendRequest']
}
