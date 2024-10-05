import { useReducer } from "react";

const initialState = {
  place: "navi mumbai",
  space: "1 bhk",
  price: 45000,
  floor: 4,
};
import { CHANGE_PRICE, myReducer } from "../Reducers/reducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  console.log({ state });

  return (
    <div className="p-5">
      <h1>{state?.place}</h1>
      <h1>{state?.price}</h1>
      <h1>{state?.space}</h1>

      <button
        className="border p-4"
        onClick={() => dispatch({ type: CHANGE_PRICE, payload: 50000 })}
      >
        update price to 50k
      </button>

      {/* <Forms />
      <Button name="kiss me" onClickFunc={() => setUser(defaultValue)} /> */}
    </div>
  );
};

export default HomePage;
