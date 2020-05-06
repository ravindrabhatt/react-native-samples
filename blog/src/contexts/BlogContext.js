import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case "add_blog":{
            return [...state, {title: `Blog No#${state.length + 1}`}]
        }
        default:
            return null;
    }
}

export const BlogProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []);

    const addBlogPost = () => {
        dispatch({type: 'add_blog'})
    }

    return <BlogContext.Provider value={{ data: state, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;