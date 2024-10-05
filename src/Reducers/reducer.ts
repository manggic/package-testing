export const CHANGE_PRICE = "change_price";
export const CHANGE_FLOOR = "change_floor";

export const myReducer = (state:any, action:any) => {
  const { type, payload } = action;

  console.log({ payload }, type);

  switch (type) {
    case CHANGE_PRICE:
      return { ...state, price: payload };
    case CHANGE_FLOOR:
      return { ...state, floor: payload };
    default:
      return state;
      break;
  }
};
