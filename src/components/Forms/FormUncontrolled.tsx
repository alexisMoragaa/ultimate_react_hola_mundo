import { FormEvent, useRef } from "react";

function FormUncontrolled() {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = {
      name: nameRef.current?.value,
      lastName: lastNameRef.current?.value,
    };

    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" ref={nameRef} id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          LastName
        </label>
        <input
          type="text"
          ref={lastNameRef}
          id="lastName"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormUncontrolled;
