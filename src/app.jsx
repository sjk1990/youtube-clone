import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "../src/video_list/vidoe_list";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const [videos, setVideos] = useState([]);

  //componentDidMount + componentDidUpdate , option [] : only react when Mount
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
