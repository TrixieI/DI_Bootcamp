export const insert = (data) => {
  return {
    type: "INSERT",
    payload: data,
  };
};
export const update = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};
export const updateIndex = (id) => {
  return {
    type: "UPDATE-INDEX",
    payload: id,
  };
};
export const del = (index) => {
  return {
    type: "DELETE",
    payload: index,
  };
};
