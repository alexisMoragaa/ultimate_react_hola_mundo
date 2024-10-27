import { useFormContext } from "react-hook-form";

type props = {
  options: readonly string[];
  label: string;
  name: string;
};

function Select({ options, label, name }: props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <>
      <label htmlFor="" className="mt-2 form-label">
        {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        {...register(name)}
      >
        <option value="" selected>
          Seleccione una opción
        </option>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </>
  );
}

export default Select;
