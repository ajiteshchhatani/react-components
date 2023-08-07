import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 px-4 py-2">
        <Outlet />
      </div>
    </>
  );
}

export default App;
