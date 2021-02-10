import { Schemas } from '../../lib/fspiop/v1_1'

describe('v1_1', () => {
  const amount: Schemas.Amount = '1.00'
  const amountType: Schemas.AmountType = 'SEND'
  const authenticationTypeQRCODE: Schemas.AuthenticationType = 'QRCODE'
  const authenticationInfo: Schemas.AuthenticationInfo = {
    authentication: authenticationTypeQRCODE,
    authenticationValue: '123'
  }
  const authorizationResponseRESEND: Schemas.AuthorizationResponse = 'RESEND'
  const balanceOfPayments: Schemas.BalanceOfPayments = '1.00'
  const bulkTransferStatePROCESSING: Schemas.BulkTransferState = 'PROCESSING'
  const code: Schemas.Code = '1234567890'
  const correlationId: Schemas.CorrelationId = '1234-5678-9abc-defg'
  const currency: Schemas.Currency = 'PLN'
  const date: Schemas.Date = '2021-01-05'
  const dateOfBirth: Schemas.DateOfBirth = '2021-01-01T00:00:0000'
  const dateTime: Schemas.DateTime = '2021-01-01T00:00:0000'
  const errorCode: Schemas.ErrorCode = '00001'
  const errorDescription: Schemas.ErrorDescription = 'error description'
  const extensionKey: Schemas.ExtensionKey = 'key'
  const extensionValue: Schemas.ExtensionValue = 'value'
  const extension: Schemas.Extension = {
    key: extensionKey,
    value: extensionValue
  }
  const extensionList: Schemas.ExtensionList = {
    extension: [extension]
  }
  const errorInformation: Schemas.ErrorInformation = {
    errorCode,
    errorDescription,
    extensionList
  }
  const errorInformationObject: Schemas.ErrorInformationObject = {
    errorInformation
  }
  const errorInformationResponse: Schemas.ErrorInformationResponse = {
    errorInformation
  }
  const firstName: Schemas.FirstName = 'Paul'
  const fspId: Schemas.FspId = '1234'
  const latitude: Schemas.Latitude = '123.12'
  const longitude: Schemas.Longitude = '123.12'
  const geoCode: Schemas.GeoCode = {
    latitude,
    longitude
  }
  const ilpCondition: Schemas.IlpCondition = 'fghij'
  const ilpFulfilment: Schemas.IlpFulfilment = 'xyz'
  const ilpPacket: Schemas.IlpPacket = 'abcde'
  const money: Schemas.Money = {
    currency,
    amount
  }
  const lastName: Schemas.LastName = 'Doe'
  const merchantClassificationCode: Schemas.MerchantClassificationCode = '4321'
  const middleName: Schemas.MiddleName = 'Abraham'
  const name: Schemas.Name = 'John'
  const note: Schemas.Note = 'note'
  const partyComplexName: Schemas.PartyComplexName = {
    firstName,
    middleName,
    lastName
  }
  const partyIdInfo: Schemas.PartyIdInfo = {
    partyIdType: 'MSISDN',
    partyIdentifier: '123',
    partySubIdOrType: '456',
    fspId: fspId
  }
  const partyPersonalInfo: Schemas.PartyPersonalInfo = {
    complexName: partyComplexName,
    dateOfBirth
  }
  const party: Schemas.Party = {
    partyIdInfo,
    merchantClassificationCode,
    name,
    personalInfo: partyPersonalInfo
  }
  const refundReason: Schemas.RefundReason = 'refund reason'
  const refund: Schemas.Refund = {
    originalTransactionId: correlationId,
    refundReason
  }
  const transactionType: Schemas.TransactionType = {
    scenario: 'TRANSFER',
    subScenario: 'sub scenario',
    initiator: 'PAYER',
    initiatorType: 'CONSUMER',
    refundInfo: refund,
    balanceOfPayments
  }
  const individualQuote: Schemas.IndividualQuote = {
    quoteId: correlationId,
    transactionId: correlationId,
    payee: party,
    amountType,
    amount: money,
    fees: money,
    transactionType,
    note,
    extensionList
  }
  const individualTransfer: Schemas.IndividualTransfer = {
    transferId: correlationId,
    transferAmount: money,
    ilpPacket,
    condition: ilpCondition,
    extensionList
  }
  const individualTransferResult: Schemas.IndividualTransferResult = {
    transferId: correlationId,
    fulfilment: ilpFulfilment,
    errorInformation,
    extensionList
  }
  const integer: Schemas.Integer = '1234567890'
  const otpValue: Schemas.OtpValue = '1234567890'
  const partyResult: Schemas.PartyResult = {
    partyId: partyIdInfo,
    errorInformation
  }

  const partyIdentifier: Schemas.PartyIdentifier = 'abcdef'
  const partyIdType: Schemas.PartyIdType = 'EMAIL'
  const partyName: Schemas.PartyName = 'party-name'
  const partySubIdOrType: Schemas.PartySubIdOrType = 'party-sub-id-or-type'
  const personalIdentifierType: Schemas.PersonalIdentifierType = 'PASSPORT'
  const qrcode: Schemas.QRCODE = 'abcdefg'
  const tokenCode: Schemas.TokenCode = 'abcd'
  const transactionInitiator: Schemas.TransactionInitiator = 'PAYER'
  const transactionInitiatorType: Schemas.TransactionInitiatorType = 'CONSUMER'
  const transactionRequestState: Schemas.TransactionRequestState = 'ACCEPTED'
  const transactionScenario: Schemas.TransactionScenario = 'TRANSFER'
  const transactionState: Schemas.TransactionState = 'RECEIVED'
  const transactionSubScenario: Schemas.TransactionSubScenario = 'transaction-sub-scenario'
  const transferState: Schemas.TransferState = 'COMMITTED'

  test('Amount', () => {
    expect(amount).toBeDefined()
  })

  test('AmountType', () => {
    expect(amountType).toBeDefined()
  })

  test('AuthenticationInfo', () => {
    expect(authenticationInfo).toBeDefined()
  })

  test('AuthenticationType', () => {
    expect(authenticationTypeQRCODE).toBeDefined()
  })

  test('AuthenticationValue', () => {
    const otpValue: Schemas.OtpValue = 'otp-value'
    const authenticationValueOTP: Schemas.AuthenticationValue = otpValue
    expect(authenticationValueOTP).toBeDefined()

    const qrcodeValue: Schemas.QRCODE = 'qrcode-value'
    const authenticationValueQRCode: Schemas.AuthenticationValue = qrcodeValue
    expect(authenticationValueQRCode).toBeDefined()
  })

  test('AuthorizationResponse', () => {
    expect(authorizationResponseRESEND).toBeDefined()
  })

  test('AuthorizationsIDPutResponse', () => {
    const authorizationsIDPutResponse: Schemas.AuthorizationsIDPutResponse = {
      authenticationInfo,
      responseType: authorizationResponseRESEND
    }
    expect(authorizationsIDPutResponse).toBeDefined()
  })

  test('BalanceOfPayments', () => {
    expect(balanceOfPayments).toBeDefined()
  })

  test('BinaryString', () => {
    const binaryString: Schemas.BinaryString = '1234'
    expect(binaryString).toBeDefined()
  })

  test('BinaryString32', () => {
    const binaryString32: Schemas.BinaryString32 = '1234'
    expect(binaryString32).toBeDefined()
  })

  test('BulkQuotesIDPutResponse', () => {
    const bulkQuotesIDPutResponse: Schemas.BulkQuotesIDPutResponse = {
      individualQuoteResults: [
        {
          quoteId: correlationId,
          payee: party,
          transferAmount: money,
          payeeReceiveAmount: money,
          payeeFspFee: money,
          payeeFspCommission: money,
          ilpPacket,
          condition: ilpCondition,
          errorInformation,
          extensionList
        }
      ],
      expiration: dateTime,
      extensionList
    }
    expect(bulkQuotesIDPutResponse).toBeDefined()
  })

  test('BulkQuotesPostRequest', () => {
    const bulkQuotesPostRequest: Schemas.BulkQuotesPostRequest = {
      bulkQuoteId: correlationId,
      payer: party,
      geoCode,
      expiration: dateTime,
      individualQuotes: [individualQuote],
      extensionList
    }
    expect(bulkQuotesPostRequest).toBeDefined()
  })

  test('BulkTransfersIDPutResponse', () => {
    const bulkTransfersIDPutResponse: Schemas.BulkTransfersIDPutResponse = {
      completedTimestamp: dateTime,
      individualTransferResults: [individualTransferResult],
      bulkTransferState: bulkTransferStatePROCESSING,
      extensionList
    }
    expect(bulkTransfersIDPutResponse).toBeDefined()
  })

  test('BulkTransfersPostRequest', () => {
    const bulkTransfersPostRequest: Schemas.BulkTransfersPostRequest = {
      bulkTransferId: correlationId,
      bulkQuoteId: correlationId,
      payerFsp: fspId,
      payeeFsp: fspId,
      individualTransfers: [individualTransfer],
      expiration: dateTime,
      extensionList
    }
    expect(bulkTransfersPostRequest).toBeDefined()
  })

  test('BulkTransferState', () => {
    expect(bulkTransferStatePROCESSING).toBeDefined()
  })

  test('Code', () => {
    expect(code).toBeDefined()
  })

  test('CorrelationId', () => {
    expect(correlationId).toBeDefined()
  })

  test('Currency', () => {
    expect(currency).toBeDefined()
  })

  test('Date', () => {
    expect(date).toBeDefined()
  })

  test('DateOfBirth', () => {
    expect(dateOfBirth).toBeDefined()
  })

  test('DateTime', () => {
    expect(dateTime).toBeDefined()
  })

  test('ErrorCode', () => {
    expect(errorCode).toBeDefined()
  })

  test('ErrorDescription', () => {
    expect(errorDescription).toBeDefined()
  })

  test('ErrorInformation', () => {
    expect(errorInformation).toBeDefined()
  })

  test('ErrorInformationObject', () => {
    expect(errorInformationObject).toBeDefined()
  })

  test('ErrorInformationResponse', () => {
    expect(errorInformationResponse).toBeDefined()
  })

  test('Extension', () => {
    expect(extension).toBeDefined()
  })

  test('ExtensionKey', () => {
    expect(extensionKey).toBeDefined()
  })

  test('ExtensionList', () => {
    expect(extensionList).toBeDefined()
  })

  test('ExtensionValue', () => {
    expect(extensionValue).toBeDefined()
  })

  test('FirstName', () => {
    expect(firstName).toBeDefined()
  })

  test('FspId', () => {
    expect(fspId).toBeDefined()
  })

  test('GeoCode', () => {
    expect(geoCode).toBeDefined()
  })

  test('IlpCondition', () => {
    expect(ilpCondition).toBeDefined()
  })

  test('IlpFulfilment', () => {
    expect(ilpFulfilment).toBeDefined()
  })

  test('IlpPacket', () => {
    expect(ilpPacket).toBeDefined()
  })

  test('IndividualQuote', () => {
    expect(individualQuote).toBeDefined()
  })

  test('IndividualQuoteResult', () => {
    const individualQuoteResult: Schemas.IndividualQuoteResult = {
      quoteId: correlationId,
      payee: party,
      transferAmount: money,
      payeeReceiveAmount: money,
      payeeFspFee: money,
      payeeFspCommission: money,
      ilpPacket,
      condition: ilpCondition,
      errorInformation,
      extensionList
    }
    expect(individualQuoteResult).toBeDefined()
  })

  test('IndividualTransfer', () => {
    const individualTransfer: Schemas.IndividualTransfer = {
      transferId: correlationId,
      transferAmount: money,
      ilpPacket,
      condition: ilpCondition,
      extensionList
    }
    expect(individualTransfer).toBeDefined()
  })

  test('IndividualTransferResult', () => {
    expect(individualTransferResult).toBeDefined()
  })

  test('Integer', () => {
    expect(integer).toBeDefined()
  })

  test('LastName', () => {
    expect(lastName).toBeDefined()
  })

  test('Latitude', () => {
    expect(latitude).toBeDefined()
  })

  test('Longitude', () => {
    expect(longitude).toBeDefined()
  })

  test('MerchantClassificationCode', () => {
    expect(merchantClassificationCode).toBeDefined()
  })

  test('MiddleName', () => {
    expect(middleName).toBeDefined()
  })

  test('Money', () => {
    expect(money).toBeDefined()
  })

  test('Name', () => {
    expect(name).toBeDefined()
  })

  test('Note', () => {
    expect(note).toBeDefined()
  })

  test('OtpValue', () => {
    expect(otpValue).toBeDefined()
  })

  test('ParticipantsIDPutResponse', () => {
    const participantsIDPutResponse: Schemas.ParticipantsIDPutResponse = {
      partyList: [partyResult],
      currency
    }
    expect(participantsIDPutResponse).toBeDefined()
  })

  test('ParticipantsPostRequest', () => {
    const participantsPostRequest: Schemas.ParticipantsPostRequest = {
      requestId: correlationId,
      partyList: [partyIdInfo],
      currency
    }
    expect(participantsPostRequest).toBeDefined()
  })

  test('ParticipantsTypeIDPutResponse', () => {
    const participantsTypeIDPutResponse: Schemas.ParticipantsTypeIDPutResponse = {
      fspId
    }
    expect(participantsTypeIDPutResponse).toBeDefined()
  })

  test('ParticipantsTypeIDSubIDPostRequest', () => {
    const participantsTypeIDSubIDPostRequest: Schemas.ParticipantsTypeIDSubIDPostRequest = {
      fspId,
      currency
    }
    expect(participantsTypeIDSubIDPostRequest).toBeDefined()
  })

  test('PartiesTypeIDPutResponse', () => {
    const partiesTypeIDPutResponse: Schemas.PartiesTypeIDPutResponse = {
      party
    }
    expect(partiesTypeIDPutResponse).toBeDefined()
  })

  test('Party', () => {
    expect(party).toBeDefined()
  })

  test('PartyComplexName', () => {
    expect(partyComplexName).toBeDefined()
  })

  test('PartyIdentifier', () => {
    expect(partyIdentifier).toBeDefined()
  })

  test('PartyIdInfo', () => {
    expect(partyIdInfo).toBeDefined()
  })

  test('PartyIdType', () => {
    expect(partyIdType).toBeDefined()
  })

  test('PartyName', () => {
    expect(partyName).toBeDefined()
  })

  test('PartyPersonalInfo', () => {
    expect(partyPersonalInfo).toBeDefined()
  })

  test('PartyResult', () => {
    expect(partyResult).toBeDefined()
  })

  test('PartySubIdOrType', () => {
    expect(partySubIdOrType).toBeDefined()
  })

  test('PersonalIdentifierType', () => {
    expect(personalIdentifierType).toBeDefined()
  })

  test('QRCODE', () => {
    expect(qrcode).toBeDefined()
  })

  test('QuotesIDPutResponse', () => {
    const quotesIDPutResponse: Schemas.QuotesIDPutResponse = {
      transferAmount: money,
      payeeReceiveAmount: money,
      payeeFspFee: money,
      payeeFspCommission: money,
      expiration: dateTime,
      geoCode,
      ilpPacket,
      condition: ilpCondition,
      extensionList
    }
    expect(quotesIDPutResponse).toBeDefined()
  })

  test('QuotesPostRequest', () => {
    const quotesPostRequest: Schemas.QuotesPostRequest = {
      quoteId: correlationId,
      transactionId: correlationId,
      transactionRequestId: correlationId,
      payee: party,
      payer: party,
      amountType,
      amount: money,
      fees: money,
      transactionType,
      geoCode,
      note,
      expiration: dateTime,
      extensionList
    }
    expect(quotesPostRequest).toBeDefined()
  })

  test('Refund', () => {
    expect(refund).toBeDefined()
  })

  test('RefundReason', () => {
    expect(refundReason).toBeDefined()
  })

  test('TokenCode', () => {
    expect(tokenCode).toBeDefined()
  })

  test('Transaction', () => {
    const transaction: Schemas.Transaction = {
      transactionId: correlationId,
      quoteId: correlationId,
      payee: party,
      payer: party,
      amount: money,
      transactionType,
      note,
      extensionList
    }
    expect(transaction).toBeDefined()
  })

  test('TransactionInitiator', () => {
    expect(transactionInitiator).toBeDefined()
  })

  test('TransactionInitiatorType', () => {
    expect(transactionInitiatorType).toBeDefined()
  })

  test('TransactionRequestsIDPutResponse', () => {
    const transactionRequestsIDPutResponse: Schemas.TransactionRequestsIDPutResponse = {
      transactionId: correlationId,
      transactionRequestState,
      extensionList
    }
    expect(transactionRequestsIDPutResponse).toBeDefined()
  })

  test('TransactionRequestsPostRequest', () => {
    const transactionRequestsPostRequest: Schemas.TransactionRequestsPostRequest = {
      transactionRequestId: correlationId,
      payee: party,
      payer: partyIdInfo,
      amount: money,
      transactionType,
      note,
      geoCode,
      authenticationType: authenticationTypeQRCODE,
      expiration: dateTime,
      extensionList
    }
    expect(transactionRequestsPostRequest).toBeDefined()
  })

  test('TransactionRequestState', () => {
    expect(transactionRequestState).toBeDefined()
  })

  test('TransactionScenario', () => {
    expect(transactionScenario).toBeDefined()
  })

  test('TransactionsIDPutResponse', () => {
    const transactionsIDPutResponse: Schemas.TransactionsIDPutResponse = {
      completedTimestamp: dateTime,
      transactionState,
      code,
      extensionList
    }
    expect(transactionsIDPutResponse).toBeDefined()
  })

  test('TransactionState', () => {
    expect(transactionState).toBeDefined()
  })

  test('TransactionSubScenario', () => {
    expect(transactionSubScenario).toBeDefined()
  })

  test('TransactionType', () => {
    const transactionType: Schemas.TransactionType = {
      scenario: transactionScenario,
      subScenario: transactionSubScenario,
      initiator: transactionInitiator,
      initiatorType: transactionInitiatorType,
      refundInfo: refund,
      balanceOfPayments
    }
    expect(transactionType).toBeDefined()
  })

  test('TransfersIDPutResponse', () => {
    const transfersIDPutResponse: Schemas.TransfersIDPutResponse = {
      fulfilment: ilpFulfilment,
      completedTimestamp: dateTime,
      transferState,
      extensionList
    }
    expect(transfersIDPutResponse).toBeDefined()
  })

  test('TransfersPostRequest', () => {
    const transfersPostRequest: Schemas.TransfersPostRequest = {
      transferId: correlationId,
      payeeFsp: fspId,
      payerFsp: fspId,
      amount: money,
      ilpPacket,
      condition: ilpCondition,
      expiration: dateTime,
      extensionList
    }
    expect(transfersPostRequest).toBeDefined()
  })

  test('TransferState', () => {
    expect(transferState).toBeDefined()
  })

  test('UndefinedEnum', () => {
    const undefinedEnum: Schemas.UndefinedEnum = 'undefined-enum'
    expect(undefinedEnum).toBeDefined()
  })
})
