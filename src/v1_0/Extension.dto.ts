import { ExtensionKey } from './ExtensionKey.dto'
import { ExtensionValue } from './ExtensionValue.dto'

export class Extension {
  key: ExtensionKey
  value: ExtensionValue
  
  constructor(key: ExtensionKey, value: ExtensionValue) {
    this.key = key
    this.value = value
  }
}
