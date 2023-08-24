const AddForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
    const handleChangeInName = (event) => {
        setNewName(event.target.value)
    }

    const handleChangeInNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleChangeInName} />
            </div>
            <div>number: <input value={newNumber} onChange={handleChangeInNumber} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddForm