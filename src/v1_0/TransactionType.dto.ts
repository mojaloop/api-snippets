import { TransactionScenario } from './TransactionScenario.dto'
import { TransactionSubScenario } from './TransactionSubScenario.dto'
import { TransactionInitiator } from './TransactionInitiator.dto'
import { TransactionInitiatorType } from './TransactionInitiatorType.dto'
import { Refund } from './Refund.dto'
import { BalanceOfPayments } from './BalanceOfPayments.dto'

export class TransactionType {
  scenario: TransactionScenario
  initiator: TransactionInitiator
  initiatorType: TransactionInitiatorType
  subScenario?: TransactionSubScenario
  refundInfo?: Refund
  balanceOfPayments?: BalanceOfPayments

  constructor(
    scenario: TransactionScenario,
    initiator: TransactionInitiator,
    initiatorType: TransactionInitiatorType,
    subScenario?: TransactionSubScenario,
    refundInfo?: Refund,
    balanceOfPayments?: BalanceOfPayments
  ) {
    this.scenario = scenario
    this.initiator = initiator
    this.initiatorType = initiatorType
    this.subScenario = subScenario
    this.refundInfo = refundInfo
    this.balanceOfPayments = balanceOfPayments
  }
}
