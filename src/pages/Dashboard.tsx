import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AxiosClient } from "../utils/Axios";
import { LoaderList } from "../components/Loader";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  type Data = {
    input: string;
    _id: string;
  };

  const [data, setData] = useState<Data[]>([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const request = await AxiosClient.get("/history");
      const data = await request.data;

      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="prose">
        <h1 className="text-white">Bienvenido a SnipSen 👋</h1>
      </div>
      <div className="py-4">
        {loading ? (
          <LoaderList />
        ) : (
          <div className="flex flex-col gap-y-4 py-5">
            {data &&
              data.length > 0 &&
              data.map((current, i) => (
                <Link
                  to={`/code/${current._id}`}
                  key={i}
                  className="px-5 py-2 w-full justify-between flex items-center border-1 border-blue-950 hover:bg-blue-950 rounded-md"
                >
                  <h2 className="text-xl font-bold text-gray-200">
                    {current.input}
                  </h2>
                  <button
                    className="outline-none flex items-center gap-x-2 text-blue-400 text-lg cursor-pointer"
                    type="button"
                  >
                    Ver <FaArrowRight />
                  </button>
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
