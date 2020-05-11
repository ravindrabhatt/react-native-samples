import React, { useReducer } from "react";
import createDataContext from "./createDataContexts";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts": {
      return action.payload;
    }

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

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blog", payload: { title, content } });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blog", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
