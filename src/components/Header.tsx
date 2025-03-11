import { Link } from "react-router-dom";
import sensei from "../assets/sensei.png";

export default function Header() {
  return (
    <>
      <nav className="flex justify-between items-center px-24 py-9">
        <Link to={"/"} className="text-2xl font-bold flex items-center">
          <img
            src={sensei}
            alt="SnipSen"
            className="w-14 h-14 object-cover mr-1"
          />{" "}
          SnipSen
        </Link>
        <ul className="flex items-center gap-x-3 text-base">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link
              to={"/code"}
              className="px-3 py-2 bg-black text-white rounded-md hover:bg-blue-950"
            >
              Genera snippets
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
