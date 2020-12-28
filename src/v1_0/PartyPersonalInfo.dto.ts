import { PartyComplexName } from './PartyComplexName.dto'
import { DateOfBirth } from './DateOfBirth.dto'

export class PartyPersonalInfo {
  complexName?: PartyComplexName
  dateOfBirth?: DateOfBirth

  constructor(complexName?: PartyComplexName, dateOfBirth?: DateOfBirth) {
    this.complexName = complexName
    this.dateOfBirth = dateOfBirth
  }
}
