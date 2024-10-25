import { FormEvent, useState } from "react";

function FormControlled() {
  const [user, setUser] = useState({ name: "", lastName: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
          id="name"
          className="form-control"
        />
        <span>{user.name}</span>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          LastName
        </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          value={user.lastName}
          id="lastName"
          className="form-control"
        />
        <span>{user.lastName}</span>
      </div>

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormControlled;
