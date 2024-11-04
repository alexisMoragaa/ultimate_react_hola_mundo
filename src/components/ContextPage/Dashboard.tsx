type Props = {
  amount: number;
};

function Dashboard({ amount }: Props) {
  return (
    <>
      <p>{amount}</p>
      <p>Dashboard</p>
    </>
  );
}

export default Dashboard;
