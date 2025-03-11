import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="custom-dark text-white min-h-screen">
      <Header />
      <div className="px-24 py-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
