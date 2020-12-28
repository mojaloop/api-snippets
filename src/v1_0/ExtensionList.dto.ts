import { Extension } from './Extension.dto'

export class ExtensionList {
  extension: Extension[]

  constructor(extension: Extension[]) {
    this.extension = extension
  }
}