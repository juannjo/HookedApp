const MovieItem = ({ title , id, poster }) => {
    return (
        <div className="card">
            <h3 className="movie-card-title">{ title }</h3>
            <img src={`https://image.tmdb.org/t/p/w400${poster}`} alt={title} />
        </div>
    )
}

export { MovieItem }