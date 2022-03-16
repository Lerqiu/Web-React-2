import { privateDecrypt } from 'crypto'
import React, { useContext } from 'react'
import { BuilderContext } from '../../../Contex/BuilderContext'

const InputNumber = () => {
  const { addPrice, data } = useContext(BuilderContext)

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    addPrice(e.target.value)
  }

  return (
    <input
      type="number"
      min="0.01"
      step="0.01"
      value={data.value}
      onChange={changeDescription}
    />
  )
}

export default InputNumber
