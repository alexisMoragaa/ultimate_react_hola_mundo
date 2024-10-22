type ListProps = {
  data: string[];
};

function List({ data }: ListProps) {
  return (
    <ul className="list-group">
      {data.map((item) => {
        return (
          <li key={item} className="list-group-item">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
