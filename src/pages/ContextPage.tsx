import Dashboard from "../components/ContextPage/Dashboard";
import MainContent from "../components/ContextPage/MainContent";
import TitleProvider from "../providers/TitleProvider";
import TodosProvider from "../providers/TodosProvider";
import UserProvider from "../providers/UserProvider";

function ContextPage() {
  return (
    <>
      <TodosProvider>
        <UserProvider>
          <TitleProvider>
            <Dashboard />
            <MainContent />
          </TitleProvider>
        </UserProvider>
      </TodosProvider>
    </>
  );
}

export default ContextPage;
