

// import css file
import './App.css'
import Footer from './components/Footer'

// import components to App in main component
import Header from './components/Header'
import React from 'react'

// define function component with type is React.FC
const App : React.FC = () => {
  const msg_footer = 'Design by student of RMIT 2023'

  // function component must be return render HTML tag with root is single tag
  return (
    <>
      <Header title='Welcome to Hello ReactJS project' />
      <Footer message= {msg_footer} />
    </>
  )
}

export default App
