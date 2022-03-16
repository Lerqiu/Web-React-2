import React, { useContext } from 'react'
import { BudgetContext } from '../../Contex/BudgetContext'
import { EntryType } from '../Entry/RawEntry'

import './Status.css'

const Status = () => {
  const { data } = useContext(BudgetContext)

  const profit = data.reduce(
    (prev, curr) => (curr.type === EntryType.PROFIT ? curr.value + prev : prev),
    0
  )
  const loss = data.reduce(
    (prev, curr) => (curr.type === EntryType.LOSS ? curr.value + prev : prev),
    0
  )

  return (
    <div className="Bar Status">
      <span className='StatusProfit'>Profit: {Math.floor(profit*100)/100} </span>
      <span className='StatusLoss'>Loss: {Math.floor(loss*100)/100} </span>
      <span className='StatusBalance'>Balance: {Math.floor((profit-loss)*100)/100} </span>
    </div>
  )
}

export default Status
