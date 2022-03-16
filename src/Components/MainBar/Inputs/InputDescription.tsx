import React, { useContext, useState } from 'react'
import { BuilderContext } from '../../../Contex/BuilderContext'

const InputDescription = () => {
  const { data, addDescription } = useContext(BuilderContext)

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = e.target.value
    addDescription(newDescription)
  }

  return (
    <input type="text" value={data.description} onChange={changeDescription} />
  )
}

export default InputDescription
