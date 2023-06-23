import React from 'react';
// import Moviedetails from './Moviedetails';

const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.image} className="card-img-top" alt="..." style={{ height: '90%' }} />
        <div className="card-body" style={{ padding: '0.5rem' }}>
          <h6 className="card-title mb-0" style={{ fontSize: '0.9rem' }}>
            {props.title}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
