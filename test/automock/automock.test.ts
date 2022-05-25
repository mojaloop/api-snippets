import { createMock } from 'ts-auto-mock'
import { Schemas } from '../../lib/fspiop/v1_1'

interface Interface {
  a: string
  b: number
}

describe('automock', () => {
  it('should work', () => {
    const randomNumber = Math.random()
    const mock = createMock<Interface>({
      b: randomNumber
    })
    expect(mock.a).toBe('')
    expect(mock.b).toBe(randomNumber)
  })

  it('should work with fspiop interface', () => {
    const mock = createMock<Schemas.TransfersPostRequest>({
      transferId: 'my-uuid'
    })
    expect(mock).toEqual({
      transferId: 'my-uuid',
      payeeFsp: '',
      payerFsp: '',
      ilpPacket: '',
      condition: '',
      expiration: '',
      amount: {
        amount: '',
        currency: 'AED'
      }
    })
  })
})
