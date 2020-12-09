import { PAGES_CREATE_FAIL, PAGES_CREATE_REQUEST, PAGES_CREATE_RESET, PAGES_CREATE_SUCCESS, PAGES_DELETE_FAIL, PAGES_DELETE_REQUEST, PAGES_DELETE_SUCCESS, PAGES_DETAILS_FAIL, PAGES_DETAILS_REQUEST, PAGES_DETAILS_SUCCESS, PAGES_LIST_FAIL, PAGES_LIST_REQUEST, PAGES_LIST_SUCCESS, PAGES_UPDATE_FAIL, PAGES_UPDATE_REQUEST, PAGES_UPDATE_RESET, PAGES_UPDATE_SUCCESS } from "../constants/pagesConstants";

export const pageListReducer = (state = { pages: [] }, action) => {
  switch (action.type) {
    case PAGES_LIST_REQUEST:
      return { loading: true, pages: [] };
    case PAGES_LIST_SUCCESS:
      return { loading: false, pages: action.payload };
    case PAGES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:

      return state;
  }
};





export const pageDetailsReducer = (state = { page: {} }, action) => {
  switch (action.type) {
    case PAGES_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PAGES_DETAILS_SUCCESS:
      return { loading: false, page: action.payload };
    case PAGES_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:

      return state;
  }
};

export const pageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PAGES_DELETE_REQUEST:
      return { loading: true};
    case PAGES_DELETE_SUCCESS:
      return { loading: false, success:true};
    case PAGES_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:

      return state;
  }
};


export const pageCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PAGES_CREATE_REQUEST:
      return { loading: true};
    case PAGES_CREATE_SUCCESS:
      return { loading: false, success:true, page:action.payload};
    case PAGES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PAGES_CREATE_RESET:
      return {}
    default:

      return state;
  }
};

export const pageUpdateReducer = (state = {page:{}}, action) => {
  switch (action.type) {
    case PAGES_UPDATE_REQUEST:
      return { loading: true};
    case PAGES_UPDATE_SUCCESS:
      return { loading: false, success:true, page:action.payload};
    case PAGES_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PAGES_UPDATE_RESET:
      return {product:{}}
    default:

      return state;
  }
};

