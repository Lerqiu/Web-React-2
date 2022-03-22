import React from 'react'
import Bar from './Components/MainBar/Bar'
import './App.css'
import BudgetContextProvider from './Contex/BudgetContext'
import BuilderContextProvider from './Contex/BuilderContext'
import List from './Components/List/List'
import Status from './Components/Status/Status'

const App = () => {
  return (
    <BudgetContextProvider>
      <BuilderContextProvider>
        <Bar />
      </BuilderContextProvider>
      <Status />
      <List />
    </BudgetContextProvider>
  )
}

export default App
