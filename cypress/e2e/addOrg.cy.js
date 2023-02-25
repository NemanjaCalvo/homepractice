/// <reference types = "Cypress"/>

import { addOrg } from "../page_object/addOrg";
import { loginPage } from "../page_object/login";

describe("add organization", () => {
  before("visit home page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPass"));
    loginPage.searchBtn.should("be.visible");
  });
  it("add organization", () => {
    addOrg.addOrgCard.click();
    addOrg.orgName.type("newOrg");
    addOrg.nextBtn.dblclick();
    addOrg.modalBodyConfirmation.click();
    addOrg.addNewBoard
      .should("be.visible")
      .and("have.class", "vs-c-organization-boards__item--add-new")
      .and("exist")
      .and("have.css", "color", "rgb(77, 77, 77)");
  });
});
