import React, { useContext } from 'react'
import { IEntry } from '../../Entry/FullEntry'
import { EntryType } from '../../Entry/RawEntry'

import styleLoss from './loss.module.css'
import styleProfit from './profit.module.css'
import './ListEntry.css'
import { BudgetContext } from '../../../Contex/BudgetContext'

const ListEntry = (props: { data: IEntry }) => {
  const myClassStyle =
    props.data.type === EntryType.PROFIT ? styleProfit : styleLoss

  const { remove } = useContext(BudgetContext)
  const onClick = () => {
    remove(props.data.id)
  }

  return (
    <div className={myClassStyle.entry}>
      <span className="ListEntryFragment ListEntryFragmentDescription">
        {props.data.description}
      </span>
      <span className="ListEntryFragment ListEntryFragmentValue">
        {props.data.value}
      </span>
      <span className="ListEntryFragment ListEntryFragmentType">
        {props.data.type == EntryType.PROFIT ? 'Profit' : 'Loss'}
      </span>
      <button className="ListEntryButton" onClick={onClick}>
        X
      </button>
    </div>
  )
}

export default ListEntry
