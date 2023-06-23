import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from './Card';
import Moviedetails from './Moviedetails';

const Genredetails = () => {
    const { id } = useParams();
    const genreid = id;
    console.log(genreid)
    const [Genrewise, SetGenrewise] = useState([])
    
    const findGenrewise = async (id) => {
            console.log(genreid)
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b3506838d86a0332b82e597ec8d36406&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
            const data = await response.json();
            SetGenrewise(data.results)
        }

        useEffect(()=>{
            findGenrewise(genreid)
        },[])

  return (
    <div>
    <div className="container">
    <div className="row justify-content-center">
        {Genrewise.map((element) => (
            <div key={element.id} className="col-md-3 mb-4">
                <Link to={`/moviedetail/${element.id}`}>
                    <Card id={element.id} title={element.title} image={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} />
                </Link>
            </div>
        ))}
    </div>
</div>
    </div>
  )
}

export default Genredetails
