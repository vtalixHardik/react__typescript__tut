
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {

  const fullname = {
    fistName: "Hardik",
    lastName: "Singh"
  }

  const list = [
    {
      firstName: "Bruce",
      lastName: "Wayne"
    },
    {
      firstName: "Clark",
      lastName: "Kent"
    },
    {
      firstName: "Princess",
      lastName: "Diana"
    }
  ]

  return (
    <>
    <div className="App">
      <Greet name="Hardik" messageCount={20} />
      <Person fullname={fullname} />
      <PersonList list={list}  />
    </div>
      
    </>
  )
}

export default App