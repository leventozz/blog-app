import React, { useState, useReducer } from "react";
import CreateDataContext from './CreateDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            const rndValue = Math.floor(Math.random() * 999).toString()
            return [...state, 
                { 
                    id: rndValue, 
                    title: action.payload.title,
                    content: action.payload.content
                }];
        case 'del_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title,content, callback) => {
        dispatch({ type: 'add_blogpost' , payload:{title, content}})
        if(callback){
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'del_blogpost', payload: id })
    }
}

export const { Context, Provider } = CreateDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);