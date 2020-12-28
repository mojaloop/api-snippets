import { CorrelationId } from './CorrelationId.dto'
import { RefundReason } from './RefundReason.dto'

export class Refund {
  originalTransactionId: CorrelationId
  refundReason?: RefundReason

  constructor(
    originalTransactionId: CorrelationId,
    refundReason?: RefundReason
  ) {
    this.originalTransactionId = originalTransactionId
    this.refundReason = refundReason
  }
}
