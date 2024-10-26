import ReactHookForm from "../components/Forms/ReactHookForm";
import FormControlled from "../components/Forms/FormControlled";
import FormUnControlled from "../components/Forms/FormUncontrolled";
import FormValidateSchema from "../components/Forms/FormValidateSchema";

function Formularios() {
  return (
    <>
      <h2 className="mb-4">Modulo Formularios</h2>

      <div className="row mb-4">
        <div className="col-6">
          <h4>React Hook Form with Form Validation Schema ZOD</h4>
          <FormValidateSchema />
        </div>

        <div className="col-6">
          <h4>React Hook Form</h4>
          <ReactHookForm />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-6">
          <h4>Uncontrolled Form</h4>
          <FormUnControlled />
        </div>

        <div className="col-6">
          <h4>Controlled Form</h4>
          <FormControlled />
        </div>
      </div>
    </>
  );
}

export default Formularios;
