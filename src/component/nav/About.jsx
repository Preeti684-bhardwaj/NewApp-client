import React from 'react';



const About = (props) => {
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '75px', height: '10vh'}}>About DailyNews</h1>
       <div style={{backgroundColor:'grey',height:'36vh',padding:'20px' }}>
         <p>
          DailyNews is your reliable source for up-to-date news and information from around the world.
          Our team is dedicated to delivering the latest headlines, insightful articles, and engaging stories.
           you'll find breaking news and all here at DailyNews.
        </p>
        <p>
          Stay informed and connected with us as we strive to bring you the news that matters most.
        </p>
        <p>
          For any inquiries or feedback, please reach out to us at info@dailynews.com.
        </p>
        </div>
      </div>
  );
};

export default About;
