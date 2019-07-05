const initialState = {
  show: false,
  saveFetchData: false,
  data: { num: "" }
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        show: true
      };

    case "STOP_LOADING":
      return {
        ...state,
        show: false
      };

    case "SAVE_FETCH_DATA":
      if (action.saveFetchData) {
        return {
          ...state,
          data: action.data,
          saveFetchData: action.saveFetchData
        };
      } else {
        return { ...state };
      }

    default:
      return state;
  }
};

export default example;
