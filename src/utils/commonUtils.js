export const convertObjectToString = (object) => {
  let strE = "";
  for (let key in object) {
    strE += object[key];
  }
  return strE;
};

export const convertArrayToString = (arr) => {
  let strE = "";
  for (let i = 0; i < arr.length; i++) {
    strE += arr[i];
  }
  return strE;
};
