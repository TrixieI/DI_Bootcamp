export const insert = (data) => {
  return {
    type: "INSERT",
    payload: data,
  };
};
export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id,
  };
};
