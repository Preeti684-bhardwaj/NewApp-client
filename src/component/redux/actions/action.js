export const getNews = (category) => async (dispatch) => {
  try {
    const host = 'https://quilted-ludicrous-rotate.glitch.me';
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
    const host = 'https://quilted-ludicrous-rotate.glitch.me';
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
