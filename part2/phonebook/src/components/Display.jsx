const Display = ({ persons, filter }) => {
    const filteredPeople = () => {
        return persons.filter(person => person.name.includes(filter))
    }

    return (filteredPeople().map((person, i) => <p key={i}>{person.name} {person.number}</p>))
}

export default Display