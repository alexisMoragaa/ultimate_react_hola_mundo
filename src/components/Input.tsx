import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type props = {
  name: string;
  children: ReactNode;
};

function Input({ name, children }: props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <>
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        {...register(name)}
        type="text"
        id={name}
        className="form-control"
      />

      {error?.message && <div className="text-danger">{error?.message}</div>}
    </>
  );
}

export default Input;
