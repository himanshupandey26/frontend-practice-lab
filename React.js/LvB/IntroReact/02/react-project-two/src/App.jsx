// import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>My first app</h1>
        <div className='cards-container'>
          <UserCard name="Sohan" desc="desc1" style={{"background-color":"red"}}/>
          <UserCard name="Rohan" desc="desc2" style={{"background-color":"blue"}}/>
          <UserCard name="Mohan" desc="desc3" style={{"background-color":"purple"}}/>
          <UserCard name="Johan" desc="desc4" style={{"background-color":"green"}}/>
        </div>
      </div>
      
    </>
  )
}

export default App
