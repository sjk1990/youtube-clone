import React from "react";
import VideoItem from "../video_item/vidoe_item";
import styles from "./video_list.module.css";

const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
