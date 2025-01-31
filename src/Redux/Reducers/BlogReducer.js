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

const initialState = {
    blogs: {
        blogs: [],
        totalBlogs: 0,
        currentPage: 1,
        totalPages: 1
    },
    currentBlog: null,
    loading: false,
    error: null
};

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        // Create Blog
        case CREATE_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CREATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: {
                    ...state.blogs,
                    blogs: [...state.blogs.blogs, action.payload],
                    totalBlogs: state.blogs.totalBlogs + 1
                },
                error: null
            };
        case CREATE_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // Get All Blogs
        case GET_ALLBLOGCONSTANTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_ALLBLOGCONSTANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: {
                    blogs: action.payload.blogs || [],
                    totalBlogs: action.payload.totalBlogs || 0,
                    currentPage: action.payload.currentPage || 1,
                    totalPages: action.payload.totalPages || 1
                },
                error: null,
            };
        case GET_ALLBLOGCONSTANTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                blogs: {
                    blogs: [],
                    totalBlogs: 0,
                    currentPage: 1,
                    totalPages: 1
                },
            };

        // Get Blog By ID
        case GET_BLOGCONSTANTSBYID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_BLOGCONSTANTSBYID_SUCCESS:
            return {
                ...state,
                loading: false,
                currentBlog: action.payload,
                error: null,
            };
        case GET_BLOGCONSTANTSBYID_FAILURE:
            return {
                ...state,
                loading: false,
                currentBlog: null,
                error: action.payload,
            };

        // Delete Blog
        case DELETE_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: {
                    ...state.blogs,
                    blogs: state.blogs.blogs.filter(blog => blog._id !== action.payload),
                    totalBlogs: state.blogs.totalBlogs - 1
                },
                error: null,
            };
        case DELETE_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // Update Blog
        case UPDATE_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: {
                    ...state.blogs,
                    blogs: state.blogs.blogs.map(blog =>
                        blog._id === action.payload._id ? action.payload : blog
                    )
                },
                error: null,
            };
        case UPDATE_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};