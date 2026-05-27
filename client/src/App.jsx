import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Loading from "./Loading";

function App() {
  let [loading, setLoadingStatus] = useState(false);
  let [question, setQuestion] = useState("");
  let [data, setData] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim() === "") {
      return;
    }

    setLoadingStatus(true);

    axios
      .post(`${import.meta.env.VITE_API_URL}/ask`, { question })

      .then((res) => res.data)

      .then((finalRes) => {
        if (finalRes._status) {
          setData(finalRes.finalData);
        }

        setLoadingStatus(false);
      })

      .catch((err) => {
        console.log(err);

        setLoadingStatus(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-10 px-6">
      {/* Heading */}
      <h1 className="text-center font-extrabold text-6xl mb-14 text-gray-800 tracking-tight">
        Nova Chat Bot
      </h1>

      {/* Main Layout */}
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[320px_auto] gap-8 items-start">
        {/* Left Side */} // question asking
        <form
          onSubmit={handleSubmit}
          className="shadow-lg bg-white p-6 rounded-2xl border border-gray-200 h-fit"
        > 
          <h2 className="text-2xl font-semibold mb-5 text-gray-700">
            Ask Anything
          </h2>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full h-[220px] border border-gray-300 rounded-xl p-4 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 duration-200"
          ></textarea>

          <button
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white w-full py-4 rounded-xl mt-5 font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Create Content"}
          </button>
        </form>
        {/* Right Side */} // response from backend
        <div className="bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 p-5">
            <h2 className="text-2xl font-semibold text-gray-700">
              AI Response
            </h2>
          </div>

          <div className="h-[500px] overflow-y-auto p-6 leading-8 text-gray-700">
            {loading ? (
              <Loading />
            ) : (
              <div className="prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-700">
                <ReactMarkdown>
                  {data || "Your AI response will appear here..."}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
