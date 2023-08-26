import './App.sass'
import Clock from './components/ClassComponents/Clock'
import Board from './components/FunctionComponents/Board'

function App() {

  return (
    <>
      <Clock message={'This time is '} />
      <hr />
      <Board />
    </>
  )
}

export default App
