import React, { useEffect } from 'react'

export default function PaymentWindow() {
  const handlePayment = () => {
    const { IMP } = window
    /**
     * IMP?.init('아임포트 가맹점 식별코드')
     * admin.iamport.kr에서 생성된 가맹점 식별코드('imp******') 입력
     *
     * 'iamport'일 경우, 관리자 테스트 모드 (환불 가능)
     */
    IMP?.init('iamport')
    IMP?.request_pay({
      /**
       * @param pg
       * 'kakao': 카카오페이,
       * 'html5_inicis': 이니시스(웹표준결제)
       * 'nice': 나이스페이
       * 'jtnet': 제이티넷
       * 'uplus': LG유플러스
       * 'danal': 다날
       * 'payco': 페이코
       * 'syrup': 시럽페이
       * 'paypal': 페이팔
       */
      pg: 'inicis',
      /**
       * @param pay_method
       * 'samsung': 삼성페이,
       * 'card': 신용카드,
       * 'trans': 실시간계좌이체,
       * 'vbank': 가상계좌,
       * 'phone': 휴대폰소액결제
       */
      pay_method: 'card',
      merchant_uid: `merchant_${new Date().getTime()}`,
      name: '노트북', // 상품명
      amount: 100, // 상품가격
      buyer_email: 'psw7347@gmail.com', // 구매자 이메일
      buyer_name: '박세원', // 구매자 이름
      buyer_tel: '010-1234-5678', // 구매자 휴대폰 번호
      buyer_addr: '서울특별시 강남구 삼성동', // 구매자 주소
      buyer_postcode: '123-456', // 구매자 우편번호
      /**
       * @param m_redirect_url
       * 모바일에서 결제 시, 결제가 끝나고 랜딩되는 URL 지정
       * (카카오페이, 페이코, 다날의 경우는 필요없음)
       */
      m_redirect_url: '리디렉션 될 URL',
    }, (rsp) => {
      console.log(rsp)
    })
  }

  useEffect(() => {
    handlePayment()
  }, [])

  return (
    <>
    </>
  )
}
