import React, { useState, useReducer } from "react";


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Angular' }];
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {

    const blogPosts = [{ title: 'React Native' }, { title: 'Javascript' }];
    const [posts, dispatch] = useReducer(blogReducer, blogPosts)

    const addBlogPost = () => {
        dispatch({type:'add_blogpost'})
    }

    return <BlogContext.Provider value={{ data: posts, addBlogPost }}>{children}</BlogContext.Provider>
};

export default BlogContext;