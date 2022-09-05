import { useState } from "react"
import { Header, Movie, Search } from "./components"

const App = () => {
    const [searcher, setSearcher] = useState([])
    
    const changeSearch = (search) => {
        setSearcher([search, ...searcher])
    }
    return (
        <div className="App">
            <Header text = "Movie Checker"/>
            <hr />
            <Search newMovie={changeSearch}/>
            <Movie 
                key={searcher[0]} 
                moviedata={searcher[0]}
            />
            
        </div>
    )
}

export { App }