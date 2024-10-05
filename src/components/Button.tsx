import { useContext } from "react";
import { UserContext } from "../Context/user";

type BUTTON_TYPE = {
  name: string;
  onClickFunc: () => void;
};

const Button = ({ name, onClickFunc }: BUTTON_TYPE) => {
  const { user } = useContext(UserContext);

  console.log('button', { user });

  return (
    <button
      className="border px-4 py-1 rounded bg-blue-600 text-white mt-3"
      onClick={onClickFunc}
    >
      {name}
    </button>
  );
};

export default Button;
