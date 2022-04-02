/**
 * 사용자가 결제를 완료했을 경우, 아임포트 모듈의 `request_pay()` 함수의 콜백으로 받아오는 정보.
 * 참고: https://docs.iamport.kr/sdk/javascript-sdk
 */

export interface PayResponseAdditionalParams {
  apply_num?: string // 카드사 승인번호(신용카드결제에 한하여 제공)
  vbank_num?: string // 가상계좌 입금계좌번호
  vbank_name?: string // 가상계좌명
  vbank_holder?: string | null // 가상계좌 예금주
  vbank_date?: number // 가상계좌 입금기한(UNIX timestamp)
}

export interface PayResponseParams extends PayResponseAdditionalParams {
  /* required */
  success: boolean
  error_code: string
  error_msg: string
  imp_uid: string | null
  merchant_uid: string
  /* optional */
  pay_method?: string
  paid_amount?: number
  status?: string
  name?: string
  pg_provider?: string
  pg_tid?: string
  buyer_name?: string
  buyer_email?: string
  buyer_tel?: string
  buyer_addr?: string
  buyer_postcode?: string
  custom_data?: any
  paid_at?: number
  receipt_url?: string
}
