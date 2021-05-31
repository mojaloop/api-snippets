import { Schemas } from '../../lib/thirdparty'

describe('thirdparty', () => {
  const accountId: Schemas.AccountId = 'account-id'
  const authenticationTypeQRCODE: Schemas.AuthenticationType = 'QRCODE'
  const currency: Schemas.Currency = 'USD'
  const name: Schemas.Name = 'name'
  const account: Schemas.Account = {
    accountNickname: name,
    id: accountId,
    currency
  }
  const authorizationChannelTypeU2F: Schemas.AuthorizationChannelType = 'U2F'
  const authorizationResponseTypeENTERED: Schemas.AuthorizationResponseType = 'ENTERED'
  const extensionKey: Schemas.ExtensionKey = 'key'
  const extensionValue: Schemas.ExtensionValue = 'value'
  const extension: Schemas.Extension = {
    key: extensionKey,
    value: extensionValue
  }
  const extensionList: Schemas.ExtensionList = {
    extension: [extension]
  }
  const errorCode: Schemas.ErrorCode = '00001'
  const errorDescription: Schemas.ErrorDescription = 'error description'
  const errorInformation: Schemas.ErrorInformation = {
    errorCode,
    errorDescription,
    extensionList
  }
  const integer: Schemas.Integer = '1'
  const correlationId: Schemas.CorrelationId = 'abcd-efgh'
  const dateTime: Schemas.DateTime = '2021-01-01T00:00:0000'
  const latitude: Schemas.Latitude = '123.12'
  const longitude: Schemas.Longitude = '123.12'
  const geoCode: Schemas.GeoCode = {
    latitude,
    longitude
  }
  const ilpCondition: Schemas.IlpCondition = 'fghij'
  const ilpPacket: Schemas.IlpPacket = 'abcde'
  const ilpFulfilment: Schemas.IlpFulfilment = 'xyz'
  const money: Schemas.Money = {
    currency,
    amount: '1'
  }
  const quote: Schemas.QuotesIDPutResponse = {
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
  const consentRequestChannelType: Schemas.ConsentRequestChannelType = 'WEB'
  const consentRequestChannelTypeWeb: Schemas.ConsentRequestChannelTypeWeb = 'WEB'
  const consentRequestChannelTypeOTP: Schemas.ConsentRequestChannelTypeOTP = 'OTP'
  const consentScopeTypeGetBalance: Schemas.ConsentScopeType = 'accounts.getBalance'
  const consentScopeTypeTransfer: Schemas.ConsentScopeType = 'accounts.transfer'
  const scope: Schemas.Scope = {
    accountId: accountId,
    actions: [consentScopeTypeGetBalance, consentScopeTypeTransfer]
  }
  const credentialTypeFIDO: Schemas.CredentialType = 'FIDO'
  const consentStatusTypeREVOKED: Schemas.ConsentStatusTypeRevoked = 'REVOKED'
  const consentStatusTypeVERIFIED: Schemas.ConsentStatusTypeVerified = 'VERIFIED'
  const fspId: Schemas.FspId = 'fsp-id'
  const firstName: Schemas.FirstName = 'John'
  const lastName: Schemas.LastName = 'Doe'
  const merchantClassificationCode: Schemas.MerchantClassificationCode = '4321'
  const middleName: Schemas.MiddleName = 'Abraham'
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
  const partyIdInfoTPLink: Schemas.PartyIdInfoTPLink = {
    partyIdType: 'THIRD_PARTY_LINK',
    partyIdentifier: '123',
    fspId: fspId
  }
  const dateOfBirth: Schemas.DateOfBirth = '2021-01-01T00:00:0000'
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
  const partyIdTypeEMAIL: Schemas.PartyIdType = 'EMAIL'
  const publicKeyCredential: Schemas.PublicKeyCredential = {
    id: 'some-id',
    response: {
      clientDataJSON: 'client-data'
    }
  }
  const signedCredential: Schemas.SignedCredential = {
    credentialType: credentialTypeFIDO,
    status: 'PENDING',
    payload: publicKeyCredential
  }

  const verifiedCredential: Schemas.VerifiedCredential = {
    credentialType: credentialTypeFIDO,
    status: 'VERIFIED',
    payload: publicKeyCredential
  }

  const transactionType: Schemas.TransactionType = {
    scenario: 'TRANSFER',
    subScenario: 'sub-scenario',
    initiator: 'PAYER',
    initiatorType: 'CONSUMER'
  }
  const partyResult: Schemas.PartyResult = {
    partyId: partyIdInfo,
    errorInformation
  }

  const partyIdentifier: Schemas.PartyIdentifier = 'abcdef'
  const partyName: Schemas.PartyName = 'party-name'
  const partySubIdOrType: Schemas.PartySubIdOrType = 'party-sub-id-or-type'

  const serviceType: Schemas.ServiceType = 'THIRD_PARTY_DFSP'

  test('Account', () => {
    expect(account).toBeDefined()
  })

  test('accountId', () => {
    expect(accountId).toBeDefined()
  })

  test('AuthorizationChannelType', () => {
    expect(authorizationChannelTypeU2F).toBeDefined()
  })

  test('AuthorizationResponseType', () => {
    expect(authorizationResponseTypeENTERED).toBeDefined()
  })

  test('AuthorizationsPostRequest', () => {
    const authorizationsPostRequest: Schemas.AuthorizationsPostRequest = {
      authenticationType: authorizationChannelTypeU2F,
      retriesLeft: integer,
      amount: money,
      transactionId: correlationId,
      transactionRequestId: correlationId,
      quote
    }
    expect(authorizationsPostRequest).toBeDefined()
  })

  test('BinaryString', () => {
    const binaryString: Schemas.BinaryString = '1234'
    expect(binaryString).toBeDefined()
  })

  test('consentRequestChannelType', () => {
    expect(consentRequestChannelType).toBeDefined()
  })

  test('ConsentRequestChannelTypeWeb', () => {
    expect(consentRequestChannelTypeWeb).toBeDefined()
  })

  test('ConsentRequestChannelTypeOTP', () => {
    expect(consentRequestChannelTypeOTP).toBeDefined()
  })

  test('ConsentRequestsIDPutResponseOTP', () => {
    const consentRequestsIDPutResponseOTP: Schemas.ConsentRequestsIDPutResponseOTP = {
      consentRequestId: 'pisp-id',
      scopes: [scope],
      authChannels: [consentRequestChannelTypeOTP],
      callbackUri: 'https://fspiId/callback'
    }
    expect(consentRequestsIDPutResponseOTP).toBeDefined()
  })

  test('ConsentRequestsIDPutResponseWeb', () => {
    const consentRequestsIDPutResponseWeb: Schemas.ConsentRequestsIDPutResponseWeb = {
      consentRequestId: 'pisp-id',
      scopes: [scope],
      authChannels: [consentRequestChannelTypeWeb],
      callbackUri: 'https://fspiId/callback',
      authUri: 'https://fspId/auth'
    }
    expect(consentRequestsIDPutResponseWeb).toBeDefined()
  })

  test('ConsentRequestsPostRequest', () => {
    const consentRequestsPostRequest: Schemas.ConsentRequestsPostRequest = {
      consentRequestId: 'pisp-id',
      userId: 'pisp-id-user',
      scopes: [scope],
      authChannels: [consentRequestChannelType],
      callbackUri: 'https://fspiId/callback'
    }
    expect(consentRequestsPostRequest).toBeDefined()
  })

  test('ConsentScopeType', () => {
    expect(consentScopeTypeGetBalance).toBeDefined()
    expect(consentScopeTypeTransfer).toBeDefined()
  })

  test('ConsentsIDGenerateChallengePostRequest', () => {
    const consentsIDGenerateChallengePostRequest: Schemas.ConsentsIDGenerateChallengePostRequest = {
      type: credentialTypeFIDO
    }
    expect(consentsIDGenerateChallengePostRequest).toBeDefined()
  })

  test('ConsentsIDPatchResponseRevoked', () => {
    const consentsIDPatchResponse: Schemas.ConsentsIDPatchResponseRevoked = {
      status: consentStatusTypeREVOKED,
      revokedAt: dateTime
    }
    expect(consentsIDPatchResponse).toBeDefined()
  })

  test('ConsentsIDPatchResponseVerified', () => {
    const consentsIDPatchResponse: Schemas.ConsentsIDPatchResponseVerified = {
      credential: {
        status: consentStatusTypeVERIFIED
      }
    }
    expect(consentsIDPatchResponse).toBeDefined()
  })

  test('ConsentsIDPutResponseSigned', () => {
    const consentsIDPutResponseSigned: Schemas.ConsentsIDPutResponseSigned = {
      scopes: [scope],
      credential: signedCredential
    }
    expect(consentsIDPutResponseSigned).toBeDefined()
  })

  test('ConsentsIDPutResponseVerified', () => {
    const consentsIDPutResponseVerified: Schemas.ConsentsIDPutResponseVerified = {
      scopes: [scope],
      credential: verifiedCredential
    }
    expect(consentsIDPutResponseVerified).toBeDefined()
  })

  test('ConsentsPostRequest', () => {
    const consentsPostRequest: Schemas.ConsentsPostRequest = {
      consentId: correlationId,
      consentRequestId: correlationId,
      scopes: [scope]
    }
    expect(consentsPostRequest).toBeDefined()
  })

  test('ConsentStatusType', () => {
    expect(consentStatusTypeREVOKED).toBeDefined()
  })

  test('CorrelationId', () => {
    expect(correlationId).toBeDefined()
  })

  test('Currency', () => {
    expect(currency).toBeDefined()
  })

  test('DateTime', () => {
    expect(dateTime).toBeDefined()
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

  test('Integer', () => {
    expect(integer).toBeDefined()
  })

  test('Latitude', () => {
    expect(latitude).toBeDefined()
  })

  test('Longitude', () => {
    expect(longitude).toBeDefined()
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

  test('ParticipantsIDPutResponse', () => {
    const participantsIDPutResponse: Schemas.ParticipantsIDPutResponse = {
      partyList: [
        { partyId: partyIdInfo }
      ]
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

  test('ParticipantsPostRequest', () => {
    const participantsTypeIDPutResponse: Schemas.ParticipantsTypeIDPutResponse = {
      fspId
    }
    expect(participantsTypeIDPutResponse).toBeDefined()
  })

  test('ParticipantsTypeIDSubIDPostRequest', () => {
    const participantsTypeIDSubIDPostRequest: Schemas.ParticipantsTypeIDSubIDPostRequest = {
      fspId
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
    expect(partyIdTypeEMAIL).toBeDefined()
  })

  test('PartyName', () => {
    expect(partyName).toBeDefined()
  })

  test('PartyResult', () => {
    expect(partyResult).toBeDefined()
  })

  test('PartySubIdOrType', () => {
    expect(partySubIdOrType).toBeDefined()
  })

  test('PartyPersonalInfo', () => {
    const partyPersonalInfo: Schemas.PartyPersonalInfo = {
      complexName: partyComplexName,
      dateOfBirth
    }
    expect(partyPersonalInfo).toBeDefined()
  })

  test('PublicKeyCredential', () => {
    const publicKeyCredential: Schemas.PublicKeyCredential = {
      id: 'some-id',
      response: {
        clientDataJSON: 'client-data'
      }
    }
    expect(publicKeyCredential).toBeDefined()
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

  test('Scope', () => {
    expect(scope).toBeDefined()
  })

  test('ServicesServiceTypePutResponse', () => {
    const servicesServiceTypePutResponse: Schemas.ServicesServiceTypePutResponse = {
      providers: ['dfspa', 'dfspb']
    }
    expect(servicesServiceTypePutResponse).toBeDefined()
  })

  test('ServiceType', () => {
    expect(serviceType).toBeDefined()
  })

  test('SignedCredential', () => {
    expect(signedCredential).toBeDefined()
  })

  test('ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest', () => {
    const thirdpartyRequestsTransactionsIDAuthorizationsPostRequest: Schemas.ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest = {
      challenge: 'the-challenge',
      value: 'signed-challenge',
      consentId: correlationId,
      sourceAccountId: accountId,
      status: 'PENDING'
    }
    expect(thirdpartyRequestsTransactionsIDAuthorizationsPostRequest).toBeDefined()
  })

  test('ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse', () => {
    const thirdpartyRequestsTransactionsIDAuthorizationsPutResponse: Schemas.ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse = {
      challenge: 'the-challenge',
      value: 'signed-challenge',
      consentId: correlationId,
      sourceAccountId: accountId,
      status: 'VERIFIED'
    }
    expect(thirdpartyRequestsTransactionsIDAuthorizationsPutResponse).toBeDefined()
  })

  test('ThirdpartyRequestsTransactionsIDPatchResponse', () => {
    const thirdpartyRequestsTransactionsIDPatchResponse: Schemas.ThirdpartyRequestsTransactionsIDPatchResponse = {
      transactionId: correlationId,
      transactionRequestState: 'ACCEPTED',
      transactionState: 'COMPLETED'
    }
    expect(thirdpartyRequestsTransactionsIDPatchResponse).toBeDefined()
  })

  test('ThirdpartyRequestsTransactionsPostRequest', () => {
    const thirdpartyRequestsTransactionsPostRequest: Schemas.ThirdpartyRequestsTransactionsPostRequest = {
      transactionRequestId: correlationId,
      payee: party,
      payer: partyIdInfoTPLink,
      amountType: 'SEND',
      amount: money,
      transactionType,
      expiration: dateTime
    }
    expect(thirdpartyRequestsTransactionsPostRequest).toBeDefined()
  })

  test('TransactionRequestState', () => {
    const transactionRequestState: Schemas.TransactionRequestState = 'PENDING'
    expect(transactionRequestState).toBeDefined()
  })

  test('TransactionState', () => {
    const transactionState: Schemas.TransactionState = 'REJECTED'
    expect(transactionState).toBeDefined()
  })

  test('TransactionType', () => {
    expect(transactionType).toBeDefined()
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

  test('VerifiedCredential', () => {
    expect(verifiedCredential).toBeDefined()
  })
})
