import { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "../src/component/video_list/vidoe_list";
import SearchHeader from "./component/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query)
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  //componentDidMount + componentDidUpdate , option [] : only react when Mount
  useEffect(() => {
    youtube
      .mostPopular()
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
