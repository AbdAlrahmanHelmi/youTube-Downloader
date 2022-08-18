import { useState } from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [frame, setFrame] = useState(false);
  const [frameURL, setFrameURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (url.includes("https://www.youtube.com/")) {
      setFrame(true);
      const URL = url.replace("ube", "");
      setFrameURL(URL);
    } else {
      setError("يرجى إدخال رابط صحيح");
    }
  };
  return (
    <main className="main">
      <HelmetProvider>
        <Helmet>
          <title>تحميل مقطع فيديو من اليوتيوب</title>
          <meta
            name="description"
            content="Web site for downloading from youtube for any device pc تحميل مقطع فيديو من اليوتيوب لجميع الاجهزة للابتوب والايفون والاندرويد والتابلت "
          />
        </Helmet>
        <h1>تحميل فيديو من اليوتيوب</h1>
        <form onSubmit={handleSubmit}>
          <input
            dir="rtl"
            placeholder="الصق رابط الفيديو هنا"
            onChange={(e) => setUrl(e.target.value)}
            type={"text"}
            value={url}
          />
          <button>تحميل</button>
        </form>
        {error && <h2 className="error">{error}</h2>}
        {frame && (
          <iframe
            title="frame"
            name="myFrame"
            width={"80%"}
            height={"500"}
            allow={""}
            loading={"eager"}
            src={frameURL}
          ></iframe>
        )}

        <div>
          <h4> &copy;Eng.Abd Al-Rahman Helmi</h4> <p>abdhelmi2018@gmail.com</p>
        </div>
      </HelmetProvider>
    </main>
  );
}

export default App;
