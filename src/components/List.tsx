import { useEffect, useState } from "react";

export default function List({ getList }:any) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(getList());
  }, [getList]);
  return (
    <div>
      <h1>List</h1>
      <ul>
        {lists.map((li) => {
          return <li key={li}>{li}</li>;
        })}
      </ul>
    </div>
  );
}
