import React, { useReducer } from "react";
import createDataContext from "./createDataContexts";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blog": {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    }

    case "edit_blog": {
      return state.map((blogPost) => {
        blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    }

    case "delete_blog": {
      return state.filter((blogPost) => blogPost.id !== action.payload);
    }
    default:
      return null;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blog", payload: { title, content } });
    console.log("complete state update for add")
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: "edit_blog", payload: { id, title, content } });
    // callback();
    console.log("complete state update for edit")
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "BLog title", content: "content", id: 1 }]
);
