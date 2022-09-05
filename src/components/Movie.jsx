import { useFetchMovie } from "../hooks/useFetchMovie.js"
import { MovieItem } from "./MovieItem.jsx"

const Movie = ({ moviedata }) => {

    const {movies, isLoading} = useFetchMovie(moviedata)

    return(
        <>
            {moviedata === undefined && <h2>Check any movie here</h2>}
            {moviedata !== undefined && <h2>{`Showing results for: ${moviedata}`}</h2>}
            {isLoading && (<h3>Loading...</h3>)}

            <div 
                className="movie-card-container"
            >
                {
                    moviedata !== undefined &&  movies.map(movie =>
                        (<MovieItem 
                            key={movie.id}
                            {...movie} 
                        />)
                    ) 
                }
            </div>
        </>
    )
}

export { Movie }    