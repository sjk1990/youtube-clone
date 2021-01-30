import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "../src/component/video_list/vidoe_list";
import SearchHeader from "./component/search_header/search_header";
import VideoDetail from "./component/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      youtube.search(query).then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
    },
    [youtube]
  );

  //componentDidMount + componentDidUpdate , option [] : only react when Mount
  useEffect(() => {
    youtube.mostPopular().then((result) => setVideos(result.items));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo ? (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        ) : null}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
