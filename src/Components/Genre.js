import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Genrecard from './Genrecard';
import Genredetails from './Genredetails';

const Genre = () => {

    const Linkstyle = {
        textDecoration: 'none',
    }

    const [genre, setgenre] = useState([])

    const Genrewise = async () => {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=45b686babe14a31e92b10dc477ef1d69&language=en-US");
        const data = await response.json();
        setgenre(data.genres)
    }
    useEffect(() => {
        Genrewise();
    }, [])

    return (
        <div className="container">
            <h1 className="text-center">Genre Wise Movies</h1>
            <div className="row justify-content-center">
                {genre.map((element) => (
                    <div key={element.id} className="col-md-3 mb-4">
                    <Link style={Linkstyle} to={`/genredetail/${element.id}`}>
                    <Genrecard title={element.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        )
    }
    
    export default Genre
    
    // <div>
    //     <div className="row mb-4">
    //         <h1 className=''>Genre Wise Movies</h1>
    //         {genre.map((element) => (
    //             <div key={element.id} className="col-md-3 mb-4">
    //                 <Link style={Linkstyle} to={`/genredetail/${element.id}`}>
    //                     <Genrecard title={element.name} />
    //                 </Link>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    // console.log(genre)