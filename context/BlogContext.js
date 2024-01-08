import React, { useState, useReducer } from "react";
import CreateDataContext from './CreateDataContext'
import JsonServer from "../api/JsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'update_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'get_blogpost':
            return action.payload;
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'update_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await JsonServer.post('/blogPosts', { title, content })
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await JsonServer.delete(`/blogPosts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await JsonServer.put(`/blogPosts/${id}`, { title, content })
        dispatch({ type: 'update_blogpost', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await JsonServer.get('/blogPosts')
        dispatch({ type: 'get_blogpost', payload: response.data })
    }
}

export const { Context, Provider } = CreateDataContext(blogReducer, { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts }, []);