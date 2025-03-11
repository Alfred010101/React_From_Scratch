import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [index, setIndex] = useState(0);
  const handleClik = (i: number) => {
    setIndex(i);
  };
  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClik(i)}
          key={element}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
