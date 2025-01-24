import {
    CREATE_SERVICE_REQUEST,
    CREATE_SERVICE_SUCCESS,
    CREATE_SERVICE_FAILURE,
    GET_ALLSERVICE_REQUEST, 
    GET_ALLSERVICE_SUCCESS, 
    GET_ALLSERVICES_FAILURE ,
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

const initialState = {
  services: [],
  currentService: null,
  loading: false,
  error: null
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SERVICE_REQUEST:
    case GET_ALLSERVICE_REQUEST:
    case GET_SERVICEBYID_REQUEST:
    case UPDATE_SERVICE_REQUEST:
    case DELETE_SERVICE_REQUEST:
      return { ...state, loading: true, error: null };

    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        services: [...state.services, action.payload],
        loading: false
      };

    case GET_ALLSERVICE_SUCCESS:
      return {
        ...state,
        services: action.payload,
        loading: false
      };

    case GET_SERVICEBYID_SUCCESS:
      return {
        ...state,
        currentService: action.payload,
        loading: false
      };

    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        services: state.services.map(service => 
          service.id === action.payload.id ? action.payload : service
        ),
        currentService: action.payload,
        loading: false
      };

    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        services: state.services.filter(service => service.id !== action.payload),
        loading: false
      };

    case CREATE_SERVICE_FAILURE:
    case GET_ALLSERVICE_FAILURE:
    case GET_SERVICEBYID_FAILURE:
    case UPDATE_SERVICE_FAILURE:
    case DELETE_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default serviceReducer;