import { FirstName } from './FirstName.dto'
import { LastName } from './LastName.dto'
import { MiddleName } from './MiddleName.dto'

export class PartyComplexName {
  firstName?: FirstName
  middleName?: MiddleName
  lastName?: LastName

  constructor(firstName?: FirstName, middleName?: MiddleName, lastName?: LastName) {
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
  }
}
