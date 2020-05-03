//ワインの予測結果を格納するResult型を定める
export interface Result {
  value: number
  comment: string
  status: boolean
}

//入力するワインの属性値を格納するWineAttribute型を定める
export interface WineAttribute {
  id: number
  japanese_title: string
  english_title: string
  value: number
  step: number
  max_value: number
  min_value: number
}

//APIにPOSTを行うID,値を格納するInputValue型を定める
export interface InputValue {
  id: number
  value: number
}
