import * as api from "../api";

//Action Creators - are functions that return an action
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
