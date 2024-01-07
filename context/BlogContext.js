import React, { useState, useReducer } from "react";
import CreateDataContext from './CreateDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 999).toString(), title: 'Vue Js' }];
        case 'del_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'del_blogpost', payload: id })
    }
}

export const { Context, Provider } = CreateDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);