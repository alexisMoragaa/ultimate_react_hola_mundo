import { cmsForm } from "../../schemas/cms";

type props = {
  data: cmsForm[];
  remove: (id: string) => void;
};

function ListCms({ data, remove }: props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key + 1} onClick={() => remove(item.id)}>
                <th>{key + 1}</th>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListCms;
