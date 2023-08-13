import axios from 'axios';// Action to fetch category-wise news
export const getNews = (category) => async (dispatch) => {
  try {
    const host = 'http://localhost:5000';
    const data = await fetch(`${host}/news/getnews?category=${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const res = await data.json();
    console.log(res);
    dispatch({ type: "SUCCESS_GET_NEWS", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL_GET_NEWS", payload: error.response });
  }
};

export const getAllNews = () => async (dispatch) => {
  try {
    const host = 'http://localhost:5000';
    const data = await fetch(`${host}/news/getallnews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const res = await data.json();
    console.log(res);
    dispatch({ type: "SUCCESS_GET_NEWS", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL_GET_NEWS", payload: error.response });
  }
};
// Action to fetch all news
// export const getAllNews = () => async (dispatch) => {
//   try {
//     const response = await axios.get(`http://localhost:5000/news/getallnews`);
//     const res = await response.data; // Use response.data instead of response.json()
//     console.log(res);
//     dispatch({ type: "SUCCESS_GET_ALL_NEWS", payload: res });
//   } catch (error) {
//     dispatch({ type: "FAIL_GET_ALL_NEWS", payload: error.response });
//   }
// };
