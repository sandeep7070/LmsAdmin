import axios from 'axios';
import {
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAILURE,

  GET_ALLSERVICES_REQUEST,
  GET_ALLSERVICE_SUCCESS,
  GET_ALLSERVICE_FAILURE,
  
  GET_SERVICEBYID_REQUEST,
  GET_SERVICEBYID_SUCCESS,
  GET_SERVICEBYID_FAILURE,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILURE,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE
} from '../Constants/Services.js';

const BASE_URL = 'https://amsbackendlive.onrender.com/api/v1';

const createService = (serviceData) => async (dispatch) => {
  dispatch({ type: CREATE_SERVICE_REQUEST });
  try {
    const response = await axios.post(`${BASE_URL}/createService`, serviceData);
    console.log("response", response)
    dispatch({ 
      type: CREATE_SERVICE_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: CREATE_SERVICE_FAILURE, 
      payload: error.response?.data || error.message 
    });
  }
};

const getAllServices = () => async (dispatch) => {
  dispatch({ type: GET_ALLSERVICES_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}/getAllServices`);
    dispatch({ 
      type: GET_ALLSERVICE_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: GET_ALLSERVICE_FAILURE, 
      payload: error.response?.data || error.message 
    });
  }
};

const getServiceById = (id) => async (dispatch) => {
  dispatch({ type: GET_SERVICEBYID_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}/getServiceById/${id}`);
    dispatch({ 
      type: GET_SERVICEBYID_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: GET_SERVICEBYID_FAILURE, 
      payload: error.response?.data || error.message 
    });
  }
};

const updateService = (id, serviceData) => async (dispatch) => {
  dispatch({ type: UPDATE_SERVICE_REQUEST });
  try {
    const response = await axios.put(`${BASE_URL}/updateService/${id}`, serviceData);
    dispatch({ 
      type: UPDATE_SERVICE_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: UPDATE_SERVICE_FAILURE, 
      payload: error.response?.data || error.message 
    });
  }
};

const deleteService = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SERVICE_REQUEST });
  try {
    await axios.delete(`${BASE_URL}/deleteService/${id}`);
    dispatch({ 
      type: DELETE_SERVICE_SUCCESS, 
      payload: id 
    });
  } catch (error) {
    dispatch({ 
      type: DELETE_SERVICE_FAILURE, 
      payload: error.response?.data || error.message 
    });
  }
};

export {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
};