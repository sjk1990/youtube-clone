import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "../src/video_list/vidoe_list";

function App() {
  const [videos, setVideos] = useState([]);

  //componentDidMount + componentDidUpdate , option [] : only react when Mount
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key={Yourkey}",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
