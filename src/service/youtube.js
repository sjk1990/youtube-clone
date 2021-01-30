import axios from "axios";
class Youtube {
  constructor(key) {
    this.youtubeClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtubeClient.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data;
  }

  async search(query) {
    const response = await this.youtubeClient.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
