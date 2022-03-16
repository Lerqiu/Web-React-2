import React, { useContext, useState } from 'react'
import { BudgetContext } from '../../Contex/BudgetContext'
import ListEntry from './Entry/ListEntry'

import './List.css'

const List = () => {
  const { data } = useContext(BudgetContext)

  return <div className='Bar List'>{data.map(entry => <ListEntry data={entry} key={entry.id}/>)}</div>
}

export default List
