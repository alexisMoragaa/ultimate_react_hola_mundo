import Dashboard from "../components/ContextPage/Dashboard";
import MainContent from "../components/ContextPage/MainContent";
import TodosProvider from "../providers/TodosProvider";
import UserProvider from "../providers/UserProvider";

function ContextPage() {
  return (
    <>
      <TodosProvider>
        <UserProvider>
          <Dashboard />
          <MainContent />
        </UserProvider>
      </TodosProvider>
    </>
  );
}

export default ContextPage;
