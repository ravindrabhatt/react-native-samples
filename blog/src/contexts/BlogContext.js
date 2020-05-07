import React, { useReducer } from "react";
import createDataContext from "./createDataContexts";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blog": {
      return [...state, { title: `Blog No#${state.length + 1}` }];
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

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  []
);
