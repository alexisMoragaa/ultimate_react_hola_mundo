import { useForm } from "react-hook-form";
import { userSchema, userForm } from "../../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";

function FormValidateSchema() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userForm>({ resolver: zodResolver(userSchema) });

  const onSubmit = (data: userForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
        {errors?.name && <p>{errors?.name?.message}</p>}
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
        {errors?.lastName && <p>{errors?.lastName?.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          type="text"
          id="age"
          className="form-control"
        />
        {errors?.age && <p>{errors?.age?.message}</p>}
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormValidateSchema;
