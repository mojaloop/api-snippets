import { openapi, Schemas } from './fspiop/v1_0'
export type CorrelationId = openapi.components['schemas']['CorrelationId']
export interface ExampleRequest {
  id: CorrelationId
  amount: Schemas.Amount
}
