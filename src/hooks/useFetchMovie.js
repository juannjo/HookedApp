import { useEffect, useState } from "react"
import { getMovie } from "../helpers/getMovie.js"

const useFetchMovie = (moviedata) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const callMovies = async() => {
        const newMovies = await getMovie(moviedata)
        setMovies(newMovies)
        setIsLoading(false)
    }
    
    useEffect( () => {
        callMovies()
    }, [])
    
    return {
        movies,
        isLoading,
    }
}
    



export { useFetchMovie }