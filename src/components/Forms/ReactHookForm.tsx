import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  lastName: string;
};

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 4,
              message: "Minimo 4 caracteres",
            },
          })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors?.name && (
          <div className="alert alert-danger">{errors?.name?.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          LastName
        </label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default ReactHookForm;
