import { OtpValue } from './OtpValue.dto'
import { QRCODE } from './QRCode.dto'

export type AuthenticationValue = OtpValue | QRCODE
