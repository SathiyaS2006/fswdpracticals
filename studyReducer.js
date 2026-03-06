const initialState = {
  studies: [],
};

export const studyReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_STUDY":
      return {
        ...state,
        studies: [
          ...state.studies,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };

    case "DELETE_STUDY":
      return {
        ...state,
        studies: state.studies.filter(study => study.id !== action.payload),
      };

    case "TOGGLE_STUDY":
      return {
        ...state,
        studies: state.studies.map(study =>
          study.id === action.payload
            ? { ...study, completed: !study.completed }
            : study
        ),
      };

    default:
      return state;
  }
};