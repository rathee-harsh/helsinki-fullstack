import { useState } from 'react'
import Display from './components/Display'
import AddForm from './components/AddForm'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')









  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h3>Add a new</h3>
      <AddForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Display persons={persons} filter={newFilter} />
    </div>
  )
}

export default App