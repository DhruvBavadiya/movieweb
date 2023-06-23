import React from 'react';

const Genrecard = (props) => {
  const cardStyle = {
    backgroundColor: '#e9e9e9',
    // width:"25%",
    padding: '80px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '10px',
  };
  const titleStyle = {
    fontSize: '25px', // Adjust the font size here
  };

  return (
    <div style={cardStyle}>
      <h1 style={titleStyle}>{props.title}</h1>
    </div>
  );
};

export default Genrecard;
