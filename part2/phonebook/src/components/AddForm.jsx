import personsServices from "../services/persons"

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
            if (confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
                const id = persons.find(person => person.name == newName).id
                const newPerson = {
                    name: newName,
                    number: newNumber
                }
                personsServices.update(id, newPerson).then(updatedPerson => {
                    const updatedPersons = persons.map(person => person.name === newName ? updatedPerson : person)
                    setPersons(updatedPersons)
                })
            }

        }
        else {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            personsServices.create(newPerson).then(createdPerson => {
                setPersons(persons.concat(createdPerson))
            })

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