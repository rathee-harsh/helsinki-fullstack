const Search = ({ search, setSearch }) => {
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div>
            find countries <input value={search} onChange={handleSearchChange}></input>
        </div>
    )
}


export default Search