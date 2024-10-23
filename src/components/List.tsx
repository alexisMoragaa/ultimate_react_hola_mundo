import { useState } from "react";

type ListProps = {
  data: string[];
  onSelect?: (element: string) => void;
};

function List({ data, onSelect }: ListProps) {
  const [index, setIndex] = useState(1);

  const handleClick = (e: number, element: string) => {
    setIndex(e);
    onSelect?.(element);
  };

  return (
    <ul className="list-group">
      {data.map((item, i) => {
        return (
          <li
            key={item}
            onClick={() => handleClick(i, item)}
            className={`list-group-item ${index === i ? "active" : ""}`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
