import { useState } from "react"

const Search = ({ newMovie }) => {
    const [inputValue, setInputValue] = useState('')
    const searchValue = ({ target }) => {
        setInputValue(target.value)
    }

    const submitSearch = async(event) => {
        event.preventDefault()
        if(inputValue !== ''){
            newMovie(inputValue)
            setInputValue('')
        }
    }

    return (
        <form className="search-form" onSubmit={submitSearch}>
            <input 
                placeholder="Your movie here"
                type="text" 
                onChange = {searchValue}
                name="inputValue"
                value={inputValue}
            />
        </form>
    )
}

export { Search }