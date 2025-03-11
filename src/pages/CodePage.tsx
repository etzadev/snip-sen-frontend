import { useState } from "react";
import { TbBrandTelegram } from "react-icons/tb";
import MarkdownMessage from "../components/MarkdownMessage";
import { AxiosClient } from "../utils/Axios";
import { IoPauseOutline } from "react-icons/io5";

export default function CodePage() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState({
    ia_input: "",
    ia_output: "",
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const req = await AxiosClient.post("/generate", { input: prompt });
      const data = await req.data;

      setData({
        ia_input: data.ia_input,
        ia_output: data.ia_output,
      });
      setPrompt("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="mb-4 relative">
        <textarea
          name="code"
          id="code"
          placeholder="¿Qué snippet de código buscas? Dímelo aquí..."
          rows={8}
          className="w-full py-4 px-4 bg-transparent border border-green-800 outline-none ring-3 ring-black rounded-lg resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          className="absolute bottom-6 right-4 p-2 bg-gray-800 rounded-full text-white cursor-pointer shadow-lg disabled:bg-gray-950"
          disabled={loading}
        >
          {loading ? (
            <IoPauseOutline className="text-3xl" />
          ) : (
            <TbBrandTelegram className="text-3xl" />
          )}
        </button>
      </form>

      <MarkdownMessage {...data} isLoading={loading} />
    </>
  );
}
