import { PayRequestParams } from "./PayRequestParams"
import { PayResponseParams } from "./PayResponseParams"

type PayRequestCallback = (response: PayResponseParams) => void

export interface Iamport {
  init: (impId: string) => void
  request_pay: (
    params: PayRequestParams,
    callback?: PayRequestCallback,
  ) => void
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    IMP?: Iamport
  }
}
