import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Carousal from './Carousal'
import Genrecard from './Genrecard'
import Moviedetails from './Moviedetails'

const Home = () => {

  const Linkstyle = {
    textDecoration: 'none',
  }

    const [trending, settrending] = useState([])
    const [genre, setgenre] = useState([])

    const Trendingmovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=45b686babe14a31e92b10dc477ef1d69")
        const data = await response.json();
        settrending(data.results)
    }
    const Genrewise = async () => {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=45b686babe14a31e92b10dc477ef1d69&language=en-US");
        const data = await response.json();
        // console.log(data.genres)
        setgenre(data.genres)
        console.log(genre)
    }

    useEffect(() => {
        Trendingmovies();
        Genrewise();
    }, []);

    return (
    <div className="container">
        <Carousal/>
      <div className="row">
        <h1>Trending Movies</h1>
        {trending.slice(0, 4).map((element) => (
          <div key={element.id} className="col-md-3 mb-4" >
          <Link style = {Linkstyle} to= {`/moviedetail/${element.id}`}>
            <Card id = {element.id} title={element.title} image={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} />
            </Link>
          </div>
        ))}
      </div>
      <Link className="btn btn-primary" type="submit" to="/movie" >
        View All Movies
      </Link>
      <div className="row mb-4">
        <h1 className=''>Genre Wise Movies</h1>
        {genre.slice(0, 4).map((element) => (
          <div key={element.id} className="col-md-3 mb-4">
          <Link style = {Linkstyle} to= {`/genredetail/${element.id}`}>
            <Genrecard title={element.name} />
            </Link>
          </div>
        ))}
      </div>
      <Link className="btn btn-primary" type="submit" to="/genre" >
        View All Category
      </Link>
    </div>
    )
}

export default Home










// <div>
//     {trending.map((element,index) => {
//         while(index<4){
//         return (
//             <div key={element.id}>
//               <Card title={element.title} image = {`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} />
//             </div>
//           );
//         }
//     })}
//     <button class="btn btn-primary" type="submit">Button</button>
    

// </div>