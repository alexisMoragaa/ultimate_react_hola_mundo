import Dashboard from "../components/ContextPage/Dashboard";
import MainContent from "../components/ContextPage/MainContent";
import TodosProvider from "../providers/TodosProvider";

function ContextPage() {
  return (
    <>
      <TodosProvider>
        <Dashboard />
        <MainContent />
      </TodosProvider>
    </>
  );
}

export default ContextPage;
