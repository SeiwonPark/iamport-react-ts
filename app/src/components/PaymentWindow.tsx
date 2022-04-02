import React, { useEffect } from "react"

export default function PaymentWindow() {
  const handlePayment = () => {
    const { IMP } = window
    /**
     * IMP?.init('아임포트 가맹점 식별코드')
     * admin.iamport.kr에서 생성된 가맹점 식별코드('imp******') 입력
     *
     * 'iamport'일 경우, 관리자 테스트 모드 (환불 가능)
     */
    IMP?.init("iamport")
    IMP?.request_pay({
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: `merchant_${new Date().getTime()}`,
      name: "노트북",
      amount: 100,
      buyer_name: "구매자 이름",
      buyer_tel: "010-1234-5678",
      buyer_email: "psw7347@gmail.com",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
      m_redirect_url: "https://iamport-react-ts.vercel.app/redirect",
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
