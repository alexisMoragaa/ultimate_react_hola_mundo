import { useReducer } from "react";
import Dashboard from "../components/ContextPage/Dashboard";
import MainContent from "../components/ContextPage/MainContent";
import TitleProvider from "../providers/TitleProvider";
import TodosProvider from "../providers/TodosProvider";
import UserProvider from "../providers/UserProvider";
import ReducerLeson from "../components/ContextPage/ReducerLeson";
import TodosReducerProviders from "../providers/TodosReducerProvider";

function ContextPage() {
  type Action = {
    type: "ADD" | "MIN" | "RESET";
  };

  const reducer = (contador: number, action: Action) => {
    switch (action.type) {
      case "ADD":
        return contador + 1;
      case "MIN":
        return contador - 1;
      case "RESET":
        return 0;
    }
  };

  const [contador, distpatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <TodosProvider>
            <UserProvider>
              <TitleProvider>
                <Dashboard />
                <MainContent />
              </TitleProvider>
            </UserProvider>
          </TodosProvider>
        </div>
        <div className="col-6">
          <h2>Reducers</h2>
          <p>
            Count: <b>{contador}</b>
          </p>
          <button
            onClick={() => distpatch({ type: "ADD" })}
            className="btn btn-primary "
          >
            Add
          </button>
          <button
            onClick={() => distpatch({ type: "MIN" })}
            className="btn btn-warning mr-1"
          >
            Minus
          </button>
          <button
            onClick={() => distpatch({ type: "RESET" })}
            className="btn btn-secondary"
          >
            Reset
          </button>

          <hr />
          <TodosReducerProviders>
            <ReducerLeson />
          </TodosReducerProviders>
        </div>
      </div>
    </>
  );
}

export default ContextPage;
