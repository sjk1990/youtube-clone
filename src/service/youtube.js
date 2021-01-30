class Youtube {
  constructor(httpClient) {
    this.youtubeClient = httpClient;
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
        q: query,
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
