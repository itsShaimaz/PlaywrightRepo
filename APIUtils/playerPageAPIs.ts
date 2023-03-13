import { expect, request } from "@playwright/test";

export class playerPageAPIs {
  apiContext: any;
  envAPI: string;
  langId: string;
  timezoneName: string;
  userCountryId: string;
  playerID: string;

  constructor(apiContext, playerID) {
    this.apiContext = apiContext;
    this.envAPI = "webws";
    this.langId = "1";
    this.timezoneName = "Asia/Amman";
    this.userCountryId = "119";
    this.playerID = playerID;
  }

  async getMainAthleteResponse() {
    const mainAthleteResponse = await this.apiContext.get(
      `https://${this.envAPI}.365scores.com/web/athletes/?appTypeId=5&langId=${this.langId}&timezoneName=${this.timezoneName}&userCountryId=${this.userCountryId}&athletes=${this.playerID}&fullDetails=true`
    );
    await expect(mainAthleteResponse.ok()).toBeTruthy();
    const ResponseJSON = await mainAthleteResponse.json();
    return ResponseJSON;
  }
}
