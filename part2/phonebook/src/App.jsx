import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
import AddForm from './components/AddForm'
import SearchFilter from './components/SearchFilter'
import Notification from './components/Notifications'
import './notifications.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} isSuccess={true} />
      <Notification message={errorMessage} isSuccess={false} />
      <SearchFilter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h3>Add a new</h3>
      <AddForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage} />
      <h3>Numbers</h3>
      <Display persons={persons} filter={newFilter} setPersons={setPersons} />
    </div>
  )
}

export default App