import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const News = (props) => {
  const { news } = useSelector(state => state.getnewsdata);
  const dispatch = useDispatch();
  const { category } = useParams();

  const [loading, setLoading] = useState(true); // Moved loading state up here

  useEffect(() => {
    // Fetch news based on the selected category
    const fetchData = async () => {
      setLoading(true); // Show spinner when fetching new data
      try {
        const response = await axios.get(`https://quilted-ludicrous-rotate.glitch.me/news/getnews?category=${category}`);
        dispatch({ type: "SUCCESS_GET_NEWS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FAIL_GET_NEWS", payload: error.response });
      }
      setTimeout(() => {
        setLoading(false); // Hide spinner after data is fetched or an error occurs
      }, 1000);
    };

    fetchData();
  }, [dispatch, category]); // Hide spinner after data is fetched or an error occurs





  const [newsInfo, setNewsInfo] = useState([]);
  const [page, setpage] = useState(1);





  News.defaultProps = {
    pageSize: 6,
  }

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  }

  const fetchMoreData = async () => {
    setpage(page + 1);
    setNewsInfo(newsInfo.concat(news));
    setLoading(false);
  }



  // useEffect(() => {
  //   document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - DailyNews`;
  // }, [category]);
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="text-center" style={{ margin: "75px 0px -20px" }}>DailyNews - Top Headlines on {category}</h1>
        {loading ? (
          <div>
            <Spinner />
            <h2 style={{ textAlign: 'center' }}> Loading....</h2>
          </div>
        ) : (
          <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreData}
            hasMore={news.length}
          >
            <div className="container">
              <div className="row my-5">
                {news.map((e) => (
                  <div className="col-md-4 mb-3" key={e._id}>
                    <NewsItem
                      title={e.title}
                      description={e.description ? e.description.slice(0, 44) : " "}
                      image={!e.image ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : e.image}
                      date={e.time}
                      place={e.place}
                      id={e._id}
                      source={e.source}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  )
}
News.propTypes = {
  mode: PropTypes.string.isRequired
}

export default News;