import React, { useReducer } from "react";
import createDataContext from "./createDataContexts";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts": {
      return action.payload;
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
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({ type: "edit_blog", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
