/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function RedirectedPage() {
  const { search } = useLocation()

  // (302) GET {m_redirect_url}?imp_uid={}&merchant_uid={본인인증 건의 merchant_uid}&success={true 또는 false}
  const impUid = new URLSearchParams(search).get('imp_uid') as string

  const getToken = async () => {
    const body = {
      imp_key: process.env.REACT_APP_IAMPORT_REST_API_KEY,
      imp_secret: process.env.REACT_APP_IAMPORT_REST_API_SECRET_KEY,
    }
    const token = await axios.post('https://api.iamport.kr/users/getToken', body, {
      headers: { 'Content-Type': 'application/json' },
    })
    const { access_token } = token.data.response
    return access_token
  }

  const getCertifications = async (accessToken: string) => {
    const certifications = await axios.get(`https://api.iamport.kr/certifications/${impUid}`, {
      headers: { Authorization: accessToken },
    })
    const certificationsInfo = certifications.data.response
    return certificationsInfo
  }

  const certify = async () => {
    const accessToken = await getToken()
    const certificationsInfo = await getCertifications(accessToken)
    console.log(certificationsInfo)
  }

  useEffect(() => {
    certify()
  }, [])

  return (
    <>
    </>
  )
}
