type props = {
  total: number;
};

function ProductDashboard({ total }: props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total de productos: {total}</p>
    </div>
  );
}

export default ProductDashboard;
