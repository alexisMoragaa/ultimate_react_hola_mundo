import { useState } from "react";
import CmsForm from "../components/Forms/CmsForm";
import ListCms from "../components/List/ListCms";
import { cmsForm } from "../schemas/cms";

function Cms() {
  const [list, setList] = useState<cmsForm[]>([]);

  const addContact = (data: cmsForm) => {
    setList([
      {
        ...data,
        id: Math.random().toString(),
      },
      ...list,
    ]);
  };
  const removeConcat = (id: string) => {
    return setList(list.filter((item) => item.id != id));
  };

  return (
    <>
      <div className="col-12">
        <h2>Formulario</h2>
        <CmsForm onSubmit={addContact} />
      </div>

      <div className="col-12 mt-4">
        <h2>Tabla</h2>
        <ListCms data={list} remove={removeConcat} />
      </div>
    </>
  );
}

export default Cms;
