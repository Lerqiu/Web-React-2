import React from 'react'
import Bar from './Components/MainBar/Bar'
import './App.css'
import BudgetContextProvider from './Contex/BudgetContext'
import BuilderContextProvider from './Contex/BuilderContext'
import List from './Components/List/List'
import Status from './Components/Status/Status'

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
