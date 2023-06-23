import React from 'react';

const Carousal = (props) => {
  return (
    <div className='container' style={{ height: '50%' }}>
    <div id="carouselExampleCaptions" className="carousel slide" >
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://staticg.sportskeeda.com/editor/2022/04/46fcd-16491469429472-1920.jpg?w=840" className="d-block w-100 h-50" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Peaky Blinders</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://staticg.sportskeeda.com/editor/2022/04/46fcd-16491469429472-1920.jpg?w=840" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Extraction 2</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://staticg.sportskeeda.com/editor/2022/04/46fcd-16491469429472-1920.jpg?w=840" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fast X</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Carousal;
