import React, { useState, useReducer } from "react";
import CreateDataContext from './CreateDataContext'
import JsonServer from "../api/JsonServer";

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
        case 'update_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'get_blogpost':
            return action.payload;
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } })
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'del_blogpost', payload: id })
    }
}

const updateBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'update_blogpost', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await JsonServer.get('/blogPosts')
        console.log(response.data)
        dispatch({ type: 'get_blogpost', payload: response.data })
    }
}

export const { Context, Provider } = CreateDataContext(blogReducer, { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts }, []);