/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

 Contributors
 --------------
 This is the official list (alphabetical ordering) of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.

 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>
 * Modusbox
 - Vijay Kumar Guthi <vijaya.guthi@modusbox.com>

 --------------
 ******/

// Accepts an OpenAPI YAML file as input and alphabetically sorts the components section
// This is done to maintain a consistent order of components

import fs from 'fs'
import yaml from 'js-yaml'

const myArgs = process.argv.slice(2)
if (myArgs.length !== 2) {
  console.log('Usage: openapi-sort-components.js <openapi-spec-yaml-file> <output-yaml-file>')
  process.exit(1)
}
const openApiFile = myArgs[0]
const outputFile = myArgs[1]

const openapi: any = yaml.load(fs.readFileSync(openApiFile, 'utf8'))

if (openapi.components.schemas) {
  const sortedComponentSchemas: any = {}
  Object.keys(openapi.components.schemas)
    .sort()
    .forEach((key) => {
      sortedComponentSchemas[key] = openapi.components.schemas[key]
    })
  openapi.components.schemas = sortedComponentSchemas
}

if (openapi.components.parameters) {
  const sortedComponentParameters: any = {}
  Object.keys(openapi.components.parameters)
    .sort()
    .forEach((key) => {
      sortedComponentParameters[key] = openapi.components.parameters[key]
    })
  openapi.components.parameters = sortedComponentParameters
}

fs.writeFileSync(outputFile, yaml.dump(openapi, { indent: 2 }))

console.log(`Sorted components in ${outputFile}`)
