export const apiMiddleWare = (store) => (next) => (action) => {
  next(action);
  console.log(action);
};
