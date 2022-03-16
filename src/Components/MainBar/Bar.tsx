import React, { useContext } from 'react'
import { BuilderContext } from '../../Contex/BuilderContext'
import InputDescription from './Inputs/InputDescription'
import InputNumber from './Inputs/InputNumber'

import Select from './SelectType/Select'

import './Bar.css'

const Bar = () => {
  const { commit } = useContext(BuilderContext)

  return (
    <div className="Bar">
      <InputDescription />
      <Select />
      <InputNumber />
      <button onClick={commit} className="BarClick">
        Click
      </button>
    </div>
  )
}

export default Bar
