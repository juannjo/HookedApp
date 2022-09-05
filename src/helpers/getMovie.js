const getMovie = async(search) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=058311de16708bd7ef096507467ee6a4&query=${search}&page=1`
    const res = await fetch(url)
    const { results }  = await res.json()
    console.log(results)
    const data = results.map(result => ({
        title: result.title,
        id: result.id,
        poster: result.poster_path
    }))
    return data
}

export { getMovie }