import { useEffect, useState } from "react";
import MarkdownMessage from "../components/MarkdownMessage";
import { AxiosClient } from "../utils/Axios";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

export default function SingleCodeView() {
  const [loading, setLoading] = useState(false);
  type Data = {
    input: string;
    ia_output: string;
  };

  const [data, setData] = useState<Data>({
    input: "",
    ia_output: "",
  });
  const params = useParams<{ id: string }>();

  const fetchData = async () => {
    setLoading(true);

    try {
      const request = await AxiosClient.get(`/code/${params.id}`);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="mb-4">
        <div className="py-10">
          <MarkdownMessage
            ia_input={data.input}
            ia_output={data.ia_output}
            isLoading={loading}
          />
        </div>
      </div>
    </>
  );
}
