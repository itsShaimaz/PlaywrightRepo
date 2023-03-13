import { Locator, Page } from "@playwright/test";

export class playerDeitals {
  page: Page;
  mainText: Locator;
  subText: Locator;

  constructor(page) {
    this.page = page;
    this.mainText = page.locator(
      ".athlete-widget_players_details_card_main_text__Uccyu"
    );
    this.subText = page.locator(".widget_players_details_card_sub_text__NfDPh");
  }

  async getNatinalityText() {
    const nationalityText = await this.mainText.nth(0).textContent();
    return nationalityText;
  }

  async getStatusText() {
    const statusText = await this.mainText.nth(1).textContent();
    return statusText;
  }

  async getAgeText() {
    const ageText = await this.mainText.nth(2).textContent();
    return ageText;
  }

  async getHeightText() {
    const HeightText = await this.mainText.nth(3).textContent();
    return HeightText;
  }

  async getJersyNumberText() {
    const jersyNumberText = await this.mainText.nth(4).textContent();
    return jersyNumberText;
  }

  async getNationalitySubText() {
    const nationalitySubText = await this.subText.nth(0).textContent();
    return nationalitySubText;
  }

  async getStatusSubText() {
    const statusSubText = await this.subText.nth(0).textContent();
    return statusSubText;
  }
}
