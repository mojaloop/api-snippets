import { Schemas } from '../../lib/thirdparty'

describe('thirdparty', () => {
  const accountAddress: Schemas.AccountAddress = 'account-id'
  const currency: Schemas.Currency = 'USD'
  const name: Schemas.Name = 'name'
  const account: Schemas.Account = {
    accountNickname: name,
    address: accountAddress,
    currency
  }
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

  const consentRequestChannelType: Schemas.ConsentRequestChannelType = 'WEB'
  const consentRequestChannelTypeWeb: Schemas.ConsentRequestChannelTypeWeb = 'WEB'
  const consentRequestChannelTypeOTP: Schemas.ConsentRequestChannelTypeOTP = 'OTP'
  const scopeActionGetBalance: Schemas.ScopeAction = 'ACCOUNTS_GET_BALANCE'
  const scopeActionTransfer: Schemas.ScopeAction = 'ACCOUNTS_TRANSFER'
  const scopeActionStatement: Schemas.ScopeAction = 'ACCOUNTS_STATEMENT'
  const scope: Schemas.Scope = {
    address: accountAddress,
    actions: [scopeActionGetBalance, scopeActionTransfer]
  }
  const credentialTypeFIDO: Schemas.CredentialType = 'FIDO'
  const consentStatusRevoked: Schemas.ConsentStatusRevoked = 'REVOKED'
  const consentStatusIssued: Schemas.ConsentStatusIssued = 'ISSUED'
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
  const FIDOPublicKeyCredentialAttestation: Schemas.FIDOPublicKeyCredentialAttestation = {
    id: 'some-credential-id',
    rawId: 'some-raw-id',
    response: {
      clientDataJSON: JSON.stringify({
        challenge: 'the-challenge',
        origin: 'pisp.mojaloop.io',
        type: 'webauthn.create'
      }),
      attestationObject: 'some-attestation'
    },
    type: 'public-key'
  }

  const signedCredential: Schemas.SignedCredential = {
    credentialType: credentialTypeFIDO,
    status: 'PENDING',
    fidoPayload: FIDOPublicKeyCredentialAttestation
  }

  const verifiedCredential: Schemas.VerifiedCredential = {
    credentialType: credentialTypeFIDO,
    status: 'VERIFIED',
    fidoPayload: FIDOPublicKeyCredentialAttestation
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

  const credentialStatusVerified: Schemas.CredentialStatus = 'VERIFIED'

  test('Account', () => {
    expect(account).toBeDefined()
  })

  test('accountAddress', () => {
    expect(accountAddress).toBeDefined()
  })

  test('AuthorizationResponseType', () => {
    const authorizationResponseType: Schemas.AuthorizationResponseType = 'ACCEPTED'
    expect(authorizationResponseType).toBeDefined()
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
      scopes: [scope],
      authChannels: [consentRequestChannelTypeOTP],
      callbackUri: 'https://fspiId/callback'
    }
    expect(consentRequestsIDPutResponseOTP).toBeDefined()
  })

  test('ConsentRequestsIDPutResponseWeb', () => {
    const consentRequestsIDPutResponseWeb: Schemas.ConsentRequestsIDPutResponseWeb = {
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

  test('ScopeActions', () => {
    expect(scopeActionGetBalance).toBeDefined()
    expect(scopeActionTransfer).toBeDefined()
    expect(scopeActionStatement).toBeDefined()
  })

  test('ConsentsIDPatchResponseRevoked', () => {
    const consentsIDPatchResponse: Schemas.ConsentsIDPatchResponseRevoked = {
      status: consentStatusRevoked,
      revokedAt: dateTime
    }
    expect(consentsIDPatchResponse).toBeDefined()
  })

  test('ConsentsIDPatchResponseVerified', () => {
    const consentsIDPatchResponse: Schemas.ConsentsIDPatchResponseVerified = {
      credential: {
        status: credentialStatusVerified
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

  test('ConsentsPostRequestPISP', () => {
    const consentsPostRequest: Schemas.ConsentsPostRequestPISP = {
      consentId: correlationId,
      consentRequestId: correlationId,
      scopes: [scope],
      status: consentStatusIssued
    }
    expect(consentsPostRequest).toBeDefined()
  })

  test('ConsentsPostRequestAUTH', () => {
    const consentsPostRequest: Schemas.ConsentsPostRequestAUTH = {
      consentId: correlationId,
      scopes: [scope],
      credential: signedCredential,
      status: consentStatusIssued
    }
    expect(consentsPostRequest).toBeDefined()
  })
  test('ConsentStatusType', () => {
    expect(consentStatusRevoked).toBeDefined()
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

  test('FIDOPublicKeyCredentialAttestation', () => {
    const FIDOPublicKeyCredentialAttestation: Schemas.FIDOPublicKeyCredentialAttestation = {
      id: 'some-credential-id',
      rawId: 'some-raw-id',
      response: {
        clientDataJSON: JSON.stringify({
          challenge: 'the-challenge',
          origin: 'pisp.mojaloop.io',
          type: 'webauthn.create'
        }),
        attestationObject: 'some-attestation'
      },
      type: 'public-key'
    }
    expect(FIDOPublicKeyCredentialAttestation).toBeDefined()
  })

  test('FIDOPublicKeyCredentialAssertion', () => {
    const FIDOPublicKeyCredentialAssertion: Schemas.FIDOPublicKeyCredentialAssertion = {
      id: 'some-credential-id',
      rawId: 'some-raw-id',
      response: {
        clientDataJSON: JSON.stringify({
          challenge: 'the-challenge',
          origin: 'pisp.mojaloop.io',
          type: 'webauthn.create'
        }),
        authenticatorData: 'some-data',
        signature: 'some-signature',
        userHandle: 'some-user-handle'
      },
      type: 'public-key'
    }
    expect(FIDOPublicKeyCredentialAssertion).toBeDefined()
  })

  test('GenericCredential', () => {
    const genericCredential: Schemas.GenericCredential = {
      publicKey: 'some-public-key',
      signature: 'some-signed-challenge'
    }
    expect(genericCredential).toBeDefined()
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

  test('ThirdpartyRequestsTransactionsIDPatchResponse', () => {
    const thirdpartyRequestsTransactionsIDPatchResponse: Schemas.ThirdpartyRequestsTransactionsIDPatchResponse = {
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

  test('ThirdpartyRequestsAuthorizationsPostRequest', () => {
    const thirdpartyRequestsAuthorizationPostRequest: Schemas.ThirdpartyRequestsAuthorizationsPostRequest = {
      authorizationRequestId: '5f8ee7f9-290f-4e03-ae1c-1e81ecf398df',
      transactionRequestId: '2cf08eed-3540-489e-85fa-b2477838a8c5',
      challenge: '<base64 encoded binary - the encoded challenge>',
      transferAmount: {
        amount: '100',
        currency: 'USD'
      },
      payeeReceiveAmount: {
        amount: '99',
        currency: 'USD'
      },
      fees: {
        amount: '1',
        currency: 'USD'
      },
      payee: {
        partyIdInfo: {
          partyIdType: 'MSISDN',
          partyIdentifier: '+4412345678',
          fspId: 'dfspb'
        }
      },
      payer: {
        partyIdType: 'THIRD_PARTY_LINK',
        partyIdentifier: 'qwerty-123456',
        fspId: 'dfspa'
      },
      transactionType: {
        scenario: 'TRANSFER',
        initiator: 'PAYER',
        initiatorType: 'CONSUMER'
      },
      expiration: '2020-06-15T12:00:00.000Z'
    }
    expect(thirdpartyRequestsAuthorizationPostRequest).toBeDefined()
  })

  test('ThirdpartyRequestsAuthorizationsIDPutResponseRejected', () => {
    const thirdpartyRequestsAuthorizationsIDPutResponseRejected: Schemas.ThirdpartyRequestsAuthorizationsIDPutResponseRejected = {
      responseType: 'REJECTED'
    }
    expect(thirdpartyRequestsAuthorizationsIDPutResponseRejected).toBeDefined()
  })
  test('ThirdpartyRequestsAuthorizationsIDPutResponseFIDO', () => {
    const thirdpartyRequestsAuthorizationsIDPutResponseFIDO: Schemas.ThirdpartyRequestsAuthorizationsIDPutResponseFIDO = {
      responseType: 'ACCEPTED',
      signedPayload: {
        signedPayloadType: 'FIDO',
        fidoSignedPayload: {
          id: '45c-TkfkjQovQeAWmOy-RLBHEJ_e4jYzQYgD8VdbkePgM5d98BaAadadNYrknxgH0jQEON8zBydLgh1EqoC9DA',
          rawId: '45c+TkfkjQovQeAWmOy+RLBHEJ/e4jYzQYgD8VdbkePgM5d98BaAadadNYrknxgH0jQEON8zBydLgh1EqoC9DA==',
          response: {
            authenticatorData: 'SZYN5YgOjGh0NBcPZHZgW4/krrmihjLHmVzzuoMdl2MBAAAACA==',
            clientDataJSON: 'eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiQUFBQUFBQUFBQUFBQUFBQUFBRUNBdyIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIxODEiLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm90aGVyX2tleXNfY2FuX2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgifQ==',
            signature: 'MEUCIDcJRBu5aOLJVc/sPyECmYi23w8xF35n3RNhyUNVwQ2nAiEA+Lnd8dBn06OKkEgAq00BVbmH87ybQHfXlf1Y4RJqwQ8='
          },
          type: 'public-key'
        }
      }
    }
    expect(thirdpartyRequestsAuthorizationsIDPutResponseFIDO).toBeDefined()
  })

  test('ThirdpartyRequestsAuthorizationsIDPutResponseGeneric', () => {
    const thirdpartyRequestsAuthorizationsIDPutResponseGeneric: Schemas.ThirdpartyRequestsAuthorizationsIDPutResponseGeneric = {
      responseType: 'ACCEPTED',
      signedPayload: {
        signedPayloadType: 'GENERIC',
        genericSignedPayload: 'some signature utf-8 string'
      }
    }
    expect(thirdpartyRequestsAuthorizationsIDPutResponseGeneric).toBeDefined()
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

  test('ThirdpartyRequestsVerificationsIDPutResponse', () => {
    const thirdpartyRequestsVerificationsIdPutResponse: Schemas.ThirdpartyRequestsVerificationsIDPutResponse = {
      authenticationResponse: 'VERIFIED'
    }
    expect(thirdpartyRequestsVerificationsIdPutResponse).toBeDefined()
  })

  test('ThirdpartyRequestsVerificationsPostRequest with a FIDO payload', () => {
    const thirdPartyRequestsVerificationsPostRequest: Schemas.ThirdpartyRequestsVerificationsPostRequest = {
      verificationRequestId: correlationId,
      challenge: 'some challenge base64 encoded',
      consentId: '8d34f91d-d078-4077-8263-2c0498dhbjr',
      signedPayloadType: 'FIDO',
      fidoSignedPayload: {
        id: '45c-TkfkjQovQeAWmOy-RLBHEJ_e4jYzQYgD8VdbkePgM5d98BaAadadNYrknxgH0jQEON8zBydLgh1EqoC9DA',
        rawId: '45c+TkfkjQovQeAWmOy+RLBHEJ/e4jYzQYgD8VdbkePgM5d98BaAadadNYrknxgH0jQEON8zBydLgh1EqoC9DA==',
        response: {
          authenticatorData: 'SZYN5YgOjGh0NBcPZHZgW4/krrmihjLHmVzzuoMdl2MBAAAACA==',
          clientDataJSON: 'eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiQUFBQUFBQUFBQUFBQUFBQUFBRUNBdyIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIxODEiLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm90aGVyX2tleXNfY2FuX2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgifQ==',
          signature: 'MEUCIDcJRBu5aOLJVc/sPyECmYi23w8xF35n3RNhyUNVwQ2nAiEA+Lnd8dBn06OKkEgAq00BVbmH87ybQHfXlf1Y4RJqwQ8='
        },
        type: 'public-key'
      }
    }

    expect(thirdPartyRequestsVerificationsPostRequest).toBeDefined()
  })

  test('ThirdpartyRequestsVerificationsPostRequest with a Generic payload', () => {
    const thirdPartyRequestsVerificationsPostRequest: Schemas.ThirdpartyRequestsVerificationsPostRequest = {
      verificationRequestId: correlationId,
      challenge: 'some challenge base64 encoded',
      consentId: '8d34f91d-d078-4077-8263-2c0498dhbjr',
      signedPayloadType: 'GENERIC',
      genericSignedPayload: 'some signed payload string'
    }

    expect(thirdPartyRequestsVerificationsPostRequest).toBeDefined()
  })

  test('VerifiedCredential', () => {
    expect(verifiedCredential).toBeDefined()
  })
})
