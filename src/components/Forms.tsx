import  { useContext } from "react";
import { UserContext } from "../Context/user";

const Forms = () => {
  const {user} = useContext(UserContext)
  const {name = '', age = 0} = user || {}
  return (
    <div>
      <input
        className="border px-2 mb-2 py-1 outline-none block"
        type="name"
        name="name"
        id="name"
        value={name}
        onChange={() => {}}
      />
      <input
        className="border px-2 py-1 outline-none block"
        type="number"
        name="age"
        id="age"
        value={age || ''}
        onChange={() => {}}
      />
    </div>
  );
};

export default Forms;
