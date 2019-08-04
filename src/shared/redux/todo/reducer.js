import { handleActions } from "redux-actions";

const initialState = {
  tasks: []
};

export default handleActions(
  {
    CREATE_TASK: (state, action) => {
      return { ...state, tasks: action.payload };
    },
    DELETE_TASK: (state, action) => {
      return { ...state, tasks: action.payload };
    },
    UPDATE_TASK: (state, action) => {
      return { ...state, tasks: action.payload };
    },
    SAVE_DATA_FROM_FIREBASE: (state, action) => {
      return { ...state, tasks: action.payload };
    }
  },
  initialState
);
