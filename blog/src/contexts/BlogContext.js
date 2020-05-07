import React, { useReducer } from "react";
import createDataContext from "./createDataContexts";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blog": {
      return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog No#${state.length + 1}` }];
    }
    case "delete_blog": {
      return state.filter( (blogPost) => blogPost.id !== action.payload);
    }
    default:
      return null;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blog" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
