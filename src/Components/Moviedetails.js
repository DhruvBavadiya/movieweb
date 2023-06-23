import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from './Card';
import Detaiscomponent from './Detaiscomponent';

const Moviedetails = (props) => {
  const Linkstyle = {
    textDecoration: 'none',
  }
  const { id } = useParams();
  const [recommend, setrecommend] = useState([])
  const [cast, setcast] = useState([{
    cast_name:"",
    cast_image:""
  }])
  const [reviews, setreviews] = useState([
    {
      author: "",
      review: "",
    }
  ])
  const [details, moviedetail] = useState([{
    name: "",
    imageurl: "",
    id: "",
    overview: "",
    tagline: ""
  }])

  const getdetails = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=45b686babe14a31e92b10dc477ef1d69`)
    const data = await response.json();
    console.log(data)
    moviedetail([{
      name: await data.title,
      imageurl: await data.backdrop_path,
      id: await data.id,
      overview: await data.overview,
      tagline: await data.tagline,
    }])
    console.log(details[0].name)
  }

  const recommendmovies = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=45b686babe14a31e92b10dc477ef1d69`)
    const data = await response.json();
    setrecommend(data.results)
  }

  const getreviews = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=45b686babe14a31e92b10dc477ef1d69`)
    const data = await response.json();
    const reviewsData = data.results.map((review) => ({
      author: review.author,
      review: review.content,
    }));
    setreviews(reviewsData);
    console.log(reviewsData[0]);
  }

  const getcast = async(id)=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=45b686babe14a31e92b10dc477ef1d69`)
    const data = await response.json();
    const castdata = data.cast.map((cast) => ({
      cast_name: cast.name,
      cast_image: cast.profile_path,
    }));
    setcast(castdata)
    console.log(cast)
  }

  useEffect(() => {
    getdetails(id);
    recommendmovies(id);
    getreviews(id);
    getcast(id);
  }, [])

  useEffect(() => {
    getdetails(id);
    recommendmovies(id);
    getreviews(id);
    getcast(id);

  }, [id])

  return (

    <div >

      <Detaiscomponent name={details[0].name} overview={details[0].overview} tagline={details[0].tagline} image={`https://image.tmdb.org/t/p/w500${details[0].imageurl}`} />


      <div className="container">
        <h1 className="text-center">Recommended Movies</h1>
        <div className="row justify-content-center">
          {recommend.length > 0 ? (
            recommend.slice(0, 4).map((element) => (
              <div key={element.id} className="col-md-3 mb-4">
                <Link style={Linkstyle} to={`/moviedetail/${element.id}`}>
                  <Card id={element.id} title={element.title} image={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} />
                </Link>
              </div>
            ))
          ) : (
            <div>No recommend Movies</div>
          )}
        </div>
      </div>
      <div className="container">
        <h1 className="text-center">cast</h1>
        <div className="row justify-content-center">
          {cast.length > 0 ? (
            cast.slice(0, 4).map((element) => (
              <div  className="col-md-3 mb-4">
                  <Card title={element.cast_name} image={`https://image.tmdb.org/t/p/w500${element.cast_image}`} />
              </div>
            ))
          ) : (
            <div>No recommend Movies</div>
          )}
        </div>
      </div>

      <div className="container">
  <h1 className="text-center">Reviews</h1>
  <div className="row justify-content-center">
    <div className="col-12">
      {reviews.length > 0 ? (
        reviews.slice(0, 4).map((element) => (
          <div key={element.id} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{element.author}</h5>
                <p className="card-text">{element.review}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No reviews available</div>
      )}
    </div>
  </div>
</div>

      



    </div>
  )
}

export default Moviedetails


// "https://api.themoviedb.org/3/movie/697843?api_key=45b686babe14a31e92b10dc477ef1d69"
// "https://api.themoviedb.org/3/movie/697843/recommendations?api_key=45b686babe14a31e92b10dc477ef1d69"
// "https://api.themoviedb.org/3/movie/697843/reviews?api_key=45b686babe14a31e92b10dc477ef1d69"
// "https://api.themoviedb.org/3/movie/697843/credits?api_key=b3506838d86a0332b82e597ec8d36406&language=en-US"