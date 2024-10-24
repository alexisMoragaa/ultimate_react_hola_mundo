interface CardProps {
  children: React.ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
