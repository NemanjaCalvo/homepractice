/// <reference types = "Cypress"/>
import { loginPage } from "../page_object/login";
import { addOrg } from "../page_object/addOrg";
import { archiveOrg, ArchiveOrg } from "../page_object/archiveOrg";

describe("archive Org", () => {
  before("get to create board page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPass"));
    loginPage.searchBtn.should("be.visible");
    addOrg.addOrgCard.click();
    addOrg.orgName.type("newOrg");
    addOrg.nextBtn.dblclick();
    addOrg.modalBodyConfirmation.should("be.visible");
    addOrg.modalBodyConfirmation.click();
  });
  it("archive organization", () => {
    archiveOrg.setingsBtn.click();
    archiveOrg.archiveBtn.click();
    archiveOrg.confirmBtn.click();
    archiveOrg.background.should(
      "have.css",
      "background-color",
      "rgb(244, 244, 244)"
    );
    archiveOrg.deleteOrgBtn
      .contains("Delete Organization")
      .should("be.visible");
    archiveOrg.deleteOrgBtn
      .contains("Reopen Organization")
      .should("be.visible");
    archiveOrg.img.should("be.visible").and("have.css", "max-width", "100%");
  });
});
