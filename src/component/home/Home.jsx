import React from 'react';


const Home = (props) => {
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black', textAlign: 'center',
    margin: '100px auto',backgroundColor:'grey',padding:'20px',borderRadius:'20px', width: '85vw'}}>
      <h1>Welcome to Daily News!</h1>
      <h3>This is your go-to source for the latest news.</h3>
      <h3>Choose a Category to get started with your daily dose of news</h3>
     
    </div>
  );
}

export default Home;
