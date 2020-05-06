import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const blogs = [
        { title: "blog 1"}, 
        { title: "blog 2"}
    ]

    return <BlogContext.Provider value={blogs}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;