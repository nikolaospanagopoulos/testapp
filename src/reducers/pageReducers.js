import { PAGES_LIST_FAIL, PAGES_LIST_REQUEST, PAGES_LIST_SUCCESS } from "../constants/pagesConstants";

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
