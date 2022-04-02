/**
 * 사용자가 결제를 요청했을 경우, 아임포트 모듈의 `request_pay()` 함수의 파라미터에 들어가는 정보.
 * 참고: https://docs.iamport.kr/sdk/javascript-sdk
 */

 interface Display {
  card_quota?: number[] // 50,000원 이상 금액 결제 시, 할부개월 수 선택 요소 제어 옵션
}

interface PayRequestAdditionalParams {
  digital?: boolean // default: false
  vbank_due?: string // 가상계좌 입금기한(YYYYMMDDhhmm)
  /**
   * @param m_redirect_url
   * 모바일에서 결제 시, 결제가 끝나고 랜딩되는 URL 지정
   * (카카오페이, 페이코, 다날의 경우는 필요없음)
   */
  m_redirect_url?: string
  app_scheme?: string
  biz_num?: string
}

export interface PayRequestParams extends PayRequestAdditionalParams {
  /* required */
  /**
   * @param pay_method
   * 'card': 신용카드
   * 'trans': 실시간계좌이체
   * 'vbank': 가상계좌
   * 'phone': 휴대폰소액결제
   * 'samsung': 삼성페이 / 이니시스, KCP 전용
   * 'kpay': KPay앱 직접호출 / 이니시스 전용
   * 'kakaopay': 카카오페이 직접호출 / 이니시스, KCP,나이스페이먼츠 전용)
   * 'payco': 페이코 직접호출 / 이니시스, KCP 전용
   * 'lpay': LPAY 직접호출 / 이니시스 전용
   * 'ssgpay': SSG페이 직접호출 / 이니시스 전용
   * 'tosspay': 토스간편결제 직접호출 / 이니시스 전용
   * 'cultureland': 문화상품권 / 이니시스, 토스페이먼츠: 구 LG U+, KCP 전용)
   * 'smartculture': 스마트문상 / 이니시스, 토스페이먼츠: 구 LG U+, KCP 전용)
   * 'happymoney': 해피머니 / 이니시스, KCP 전용
   * 'booknlife': 도서문화상품권 / 토스페이먼츠: 구 LG U+), KCP전용)
   * 'point': 베네피아 포인트 등 포인트 결제 / KCP 전용
   * 'wechat': 위쳇페이 / 엑심베이 전용
   * 'alipay': 알리페이 / 엑심베이 전용
   * 'unionpay': 유니온페이 / 엑심베이 전용
   * 'tenpay': 텐페이 / 엑심베이 전용
   */
  pay_method: string
  merchant_uid: string // 가맹점에서 생성/관리하는 고유 주문번호
  amount: number
  buyer_tel: string
  /* optional */
  /**
   * @param pg
   * (v1.1.0 부터 지원)
   *
   * 'inicis': 이니시스(ActiveX결제창)
   * 'html5_inicis': 이니시스(웹표준결제)
   * 'kcp': NHN KCP
   * 'kcp_billing': NHN KCP 정기결제
   * 'uplus': 토스페이먼츠(구 LG U+)
   * 'nice': 나이스페이
   * 'jtnet': JTNet
   * 'kicc': 한국정보통신
   * 'bluewalnut': 블루월넛
   * 'kakaopay': 카카오페이,
   * 'danal': 다날 휴대폰 소액결제
   * 'danal_tpay': 다날 일반결제
   * 'mobilians': 모빌리언스 휴대폰 소액결제
   * 'chai': 차이 간편결제
   * 'syrup': 시럽페이
   * 'payco': 페이코
   * 'paypal': 페이팔
   * 'eximbay': 엑심베이
   * 'naverpay': 네이버페이(결제형)
   * 'naverco': 네이버페이(주문형)
   * 'smilepay': 스마일페이
   * 'alipay': 알리페이
   * 'paymentwall': 페이먼트월
   * 'payple': 페이플
   * 'tosspay': 토스 간편결제
   * 'samrtro: 스마트로
   * 'settle': 세틀뱅크
   */
  pg?: string
  escrow?: boolean // 에스크로가 적용되는 결제창을 호출할지 여부. default: false
  name?: string
  custom_data?: any
  tax_free?: number
  /**
   * @param currency
   * KRW
   * USD
   * EUR
   * JPY
   */
  currency?: string
  language?: string
  buyer_name?: string
  buyer_email?: string
  buyer_addr?: string
  buyer_postcode?: string
  notice_url?: string | string[]
  display?: Display
}
