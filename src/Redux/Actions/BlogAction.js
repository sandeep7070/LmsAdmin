import axios from 'axios';
import {
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAILURE,
    GET_ALLBLOGCONSTANTS_REQUEST,
    GET_ALLBLOGCONSTANTS_SUCCESS,
    GET_ALLBLOGCONSTANTS_FAILURE,
    GET_BLOGCONSTANTSBYID_REQUEST,
    GET_BLOGCONSTANTSBYID_SUCCESS,
    GET_BLOGCONSTANTSBYID_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAILURE,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAILURE
} from '../Constants/BlogConstants.js';

const BASE_URL = 'https://amsbackendlive.onrender.com/api/v1/blog';

const createBlog = (formData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_BLOG_REQUEST });

        if (!(formData instanceof FormData)) {
            throw new Error('Invalid form data format');
        }

        const response = await axios.post(`${BASE_URL}/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        dispatch({
            type: CREATE_BLOG_SUCCESS,
            payload: response.data.data || response.data
        });

        return {
            status: 'succeeded',
            data: response.data
        };
    } catch (error) {
        console.error('Create blog error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });

        dispatch({
            type: CREATE_BLOG_FAILURE,
            payload: error.response?.data?.message || error.message
        });

        return {
            status: 'failed',
            error: error.response?.data?.message || error.message || 'Failed to create blog'
        };
    }
};

const getAllBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALLBLOGCONSTANTS_REQUEST });
        
        console.log('Making API request to:', `${BASE_URL}/getAllBlogs`);
        const response = await axios.get(`${BASE_URL}/getAllBlogs`);
        console.log('API Response:', response.data);
        
        // Add validation and structure logging
        if (!response.data) {
            throw new Error('No data received from API');
        }
        
        // Log the structure we're dispatching
        const payload = {
            data: response.data
        };
          
        console.log("all data response ", response.data)
        
        dispatch({
            type: GET_ALLBLOGCONSTANTS_SUCCESS,
            payload: payload
        });

        return payload;
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        
        dispatch({
            type: GET_ALLBLOGCONSTANTS_FAILURE,
            payload: error.response?.data?.message || error.message
        });
        throw error;
    }
};


const getBlogById = (id) => async (dispatch) => {
    try {
        if (!id) {
            throw new Error('Blog ID is required');
        }

        dispatch({ type: GET_BLOGCONSTANTSBYID_REQUEST });

        const response = await axios.get(`${BASE_URL}/getBlogById/${id}`);

        dispatch({
            type: GET_BLOGCONSTANTSBYID_SUCCESS,
            payload: {
                blog: response.data.blog,
                count: response.data.count
            }
        });

        return response.data.blog;
    } catch (error) {
        dispatch({
            type: GET_BLOGCONSTANTSBYID_FAILURE,
            payload: error.response?.data?.message || error.message
        });
        throw error;
    }
};

const deleteBlog = (id) => async (dispatch) => {
    try {
        if (!id) {
            throw new Error('Blog ID is required');
        }

        dispatch({ type: DELETE_BLOG_REQUEST });

        const response = await axios.delete(`${BASE_URL}/deleteBlog/${id}`);

        if (response.data) {
            dispatch({
                type: DELETE_BLOG_SUCCESS,
                payload: id
            });

            return { success: true };
        } else {
            throw new Error('Failed to delete blog');
        }
    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAILURE,
            payload: error.message || 'Failed to delete blog'
        });
        throw error;
    }
};

const updateBlog = (id, blogData) => async (dispatch) => {
    try {
        if (!id) {
            throw new Error('Blog ID is required');
        }

        if (!blogData || Object.keys(blogData).length === 0) {
            throw new Error('Blog data is required');
        }

        dispatch({ type: UPDATE_BLOG_REQUEST });

        const response = await axios.put(`${BASE_URL}/updateBlog/${id}`, blogData);

        dispatch({
            type: UPDATE_BLOG_SUCCESS,
            payload: response.data
        });

        return response.data;
    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAILURE,
            payload: error.response?.data?.message || error.message
        });
        throw error;
    }
};



export {
    createBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    updateBlog
};