import axios from 'axios';
import {
  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAILURE,
  GET_ALLTEAMMEMBERS_REQUEST,
  GET_ALLTEAMMEMBERS_SUCCESS,
  GET_ALLTEAMMEMBERS_FAILURE,
  GET_TEAMMEMBERBYID_REQUEST,
  GET_TEAMMEMBERBYID_SUCCESS,
  GET_TEAMMEMBERBYID_FAILURE,
  DELETE_TEAMMEMBER_REQUEST,
  DELETE_TEAMMEMBER_SUCCESS,
  DELETE_TEAMMEMBER_FAILURE,
  UPDATE_TEAMMEMBER_REQUEST,
  UPDATE_TEAMMEMBER_SUCCESS,
  UPDATE_TEAMMEMBER_FAILURE
} from '../Constants/TeamMembers.js';

 const createTeam = (teamData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_TEAM_REQUEST });
    
    const { data } = await axios.post('https://amsbackendlive.onrender.com/api/v1/team/Create', teamData);
     console.log("data", data)
    dispatch({
      type: CREATE_TEAM_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_TEAM_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};

 const getAllTeamMembers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALLTEAMMEMBERS_REQUEST });
    
    const { data } = await axios.get('https://amsbackendlive.onrender.com/api/v1/team/getAllTeamMembers');
    
    console.log("API Response:", data);
    console.log("Number of Team Members:", data.length);
   


    dispatch({
      type: GET_ALLTEAMMEMBERS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ALLTEAMMEMBERS_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};

 const getTeamMemberById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_TEAMMEMBERBYID_REQUEST });
    
    const { data } = await axios.get(`https://amsbackendlive.onrender.com/api/v1/team/getTeamMemberById${id}`);
    
    dispatch({
      type: GET_TEAMMEMBERBYID_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_TEAMMEMBERBYID_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};

 const deleteTeamMember = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TEAMMEMBER_REQUEST });
    
    await axios.delete(`https://amsbackendlive.onrender.com/api/v1/team/deleteTeamMember${id}`);
    
    dispatch({
      type: DELETE_TEAMMEMBER_SUCCESS,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: DELETE_TEAMMEMBER_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};

 const updateTeamMember = (id, memberData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TEAMMEMBER_REQUEST });
    
    const { data } = await axios.put(`https://amsbackendlive.onrender.com/api/v1/team/updateTeamMember${id}`, memberData);
    
    dispatch({
      type: UPDATE_TEAMMEMBER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TEAMMEMBER_FAILURE,
      payload: error.response?.data?.message || error.message
    });
  }
};

export {
  createTeam,
  getAllTeamMembers,
  getTeamMemberById,
  deleteTeamMember,
  updateTeamMember
}