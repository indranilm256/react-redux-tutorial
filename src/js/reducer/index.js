
import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articleList: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articleList: state.articleList.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;