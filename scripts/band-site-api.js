export default class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com";
  }
  async getComment() {
    const response = await axios.get(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`
    );
    return response.data;
  }
  async postComment(commentObj) {
    const response = await axios.post(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`,
      commentObj
    );
    return response;
  }

  async getShows() {
    const response = await axios.get(
      `${this.baseUrl}/showdates?api_key=${this.apiKey}`
    );
    return response.data;
  }
}
