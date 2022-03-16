import React, { useContext, useState } from 'react'
import { BuilderContext } from '../../../Contex/BuilderContext'
import { EntryType } from '../../Entry/RawEntry'

const Select = () => {
  const { data, addType } = useContext(BuilderContext)

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = +e.target.value as EntryType
    addType(newType)
  }

  return (
    <select onChange={selectChange} value={data.type}>
      <option value={EntryType.PROFIT}>Profit</option>
      <option value={EntryType.LOSS}>Loss</option>
    </select>
  )
}

export default Select
