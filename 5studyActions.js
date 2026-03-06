export const addStudy = (text) => {
  return {
    type: "ADD_STUDY",
    payload: text,
  };
};

export const deleteStudy = (id) => {
  return {
    type: "DELETE_STUDY",
    payload: id,
  };
};

export const toggleStudy = (id) => {
  return {
    type: "TOGGLE_STUDY",
    payload: id,
  };
};
