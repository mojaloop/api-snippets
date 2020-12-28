import { PartyIdInfo } from './PartyIdInfo.dto'
import { MerchantClassificationCode } from './MerchantClassificationCode.dto'
import { PartyName } from './PartyName.dto'
import { PartyPersonalInfo } from './PartyPersonalInfo.dto'

export class Party {
  partyIdInfo: PartyIdInfo
  merchantClassificationCode?: MerchantClassificationCode
  name?: PartyName
  personalInfo?: PartyPersonalInfo

  constructor(
    partyIdInfo: PartyIdInfo,
    merchantClassificationCode?: MerchantClassificationCode,
    name?: PartyName,
    personalInfo?: PartyPersonalInfo
  ) {
    this.partyIdInfo = partyIdInfo
    this.merchantClassificationCode = merchantClassificationCode
    this.name = name
    this.personalInfo = personalInfo
  }
}
