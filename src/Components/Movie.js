import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component';
import Moviedetails from './Moviedetails'

const Movie = () => {
    const [trending, settrending] = useState([])
    const [page,setpage] = useState(1)
    const Linkstyle = {
        textDecoration: 'none',
    }

    const Trendingmovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=45b686babe14a31e92b10dc477ef1d69")
        const data = await response.json();
        settrending(data.results)
    }

    const getMoreTrendingMovies = async() =>{
        const nextPage = page + 1;
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=45b686babe14a31e92b10dc477ef1d69&page=${nextPage}`);
    const jsonData = await response.json();
    settrending([...trending, ...jsonData.results]);
    setpage(nextPage);
    }

    useEffect(() => {
        Trendingmovies();
        // getMoreTrendingMovies();
    }, [])

    return (
        <div className="container">
            <h1 className="text-center">Trending Movies</h1>
            <InfiniteScroll
                dataLength={trending.length} //This is important field to render the next data
                next={getMoreTrendingMovies}
                hasMore={true}
                // loader={<Spinner />}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
            <div className="row justify-content-center">
                {trending.map((element) => (
                    <div key={element.id} className="col-md-3 mb-4">
                        <Link style={Linkstyle} to={`/moviedetail/${element.id}`}>
                            <Card id={element.id} title={element.title} image={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} />
                        </Link>
                    </div>
                ))}
            </div>
            </InfiniteScroll>
        </div>
    )
}

export default Movie
