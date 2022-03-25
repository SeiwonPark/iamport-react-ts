/**
 * 사용자가 결제를 요청했을 경우, 아임포트 모듈의 `request_pay()` 함수의 파라미터에 들어가는 정보.
 * 참고: https://docs.iamport.kr/sdk/javascript-sdk
 */

 interface Display {
  card_quota?: number[]
}

interface PayRequestAdditionalParams {
  digital?: boolean // default: false
  vbank_due?: string
  m_redirect_url?: string
  app_scheme?: string
  biz_num?: string
}

export interface PayRequestParams extends PayRequestAdditionalParams {
  /* required */
  pay_method: string
  merchant_uid: string
  amount: number
  buyer_tel: string
  /* optional */
  pg?: string
  escrow?: boolean
  name?: string
  custom_data?: any
  tax_free?: number
  currency?: string
  language?: string
  buyer_name?: string
  buyer_email?: string
  buyer_addr?: string
  buyer_postcode?: string
  notice_url?: string | string[]
  display?: Display
}
