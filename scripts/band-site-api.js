export default class BandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com";
  }
  async getComment() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  async postComment(commentObj) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`,
        commentObj
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getRandomProfile() {
    try {
      const response = await axios.get(
        "https://random.dog/woof.json?filter=mp4,webm"
      );
      return response.data.url;
    } catch (e) {
      console.log("Can not get random profile");
      return "../../assets/Images/blank-profile.png";
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}/showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
