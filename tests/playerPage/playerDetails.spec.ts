import { test, expect, request } from "@playwright/test";
import { playerPageAPIs } from "../../APIUtils/playerPageAPIs";
import { playerDeitals } from "../../pages/PlayerPage/playerDetails";

// let playerPageAPI;
// const baseURL: string = "www.365scores.com";
// const playerID: string = "111";
// const playerName: string = "Gerard Pique";
// const playerNameURL: string = playerName.replace(" ", "-");
// const sportType: string = "football";

test.use({
  geolocation: { longitude: -14.2400732, latitude: -53.1805017 },
  permissions: ["geolocation"],
});

test("Check ", async ({ page }) => {
  await page.goto(`https://www.365scores.com/`);
  await expect(page.title()).toEqual("365scores");
});
// test.beforeAll(async () => {
//   const apiContext = await request.newContext();
//   playerPageAPI = new playerPageAPIs(apiContext, playerID);
// });

// test("Check Nationality", async ({ page }) => {
//   await page.goto(
//     `https://${baseURL}/${sportType}/player/${playerNameURL}-${playerID}`
//   );
//   const playerDeitalsClient = new playerDeitals(page);
//   const NationalityClient = await playerDeitalsClient.getNatinalityText();
//   console.log(`${NationalityClient} Bye`);
//   const APIresponse = await playerPageAPI.getMainAthleteResponse();
//   const NationalityAPI = APIresponse.athletes[0].nationalityName;
//   await expect(NationalityClient).toEqual(NationalityAPI);
// });

// test("Check status", async ({ page }) => {
//   await page.goto(
//     `https://${baseURL}/${sportType}/player/${playerNameURL}-${playerID}`
//   );
//   const playerDeitalsClient = new playerDeitals(page);
//   const NationalityClient = await playerDeitalsClient.getStatusText();
//   console.log(`${NationalityClient} Hi`);
//   const APIresponse = await playerPageAPI.getMainAthleteResponse();
//   const NationalityAPI = APIresponse.athletes[0].nationalityName;
//   await expect(NationalityClient).toEqual(NationalityAPI);
// });
