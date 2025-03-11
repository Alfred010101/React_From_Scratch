import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (element: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0);
  const handleClik = (i: number, e: string) => {
    setIndex(i);
    onSelect?.(e);
  };
  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClik(i, element)}
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
