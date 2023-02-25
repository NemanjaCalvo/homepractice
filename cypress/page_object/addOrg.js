class AddOrganization {
  get addOrgCard() {
    return cy.get(".vs-c-my-organization--add-new");
  }
  get orgName() {
    return cy.get("input");
  }
  get nextBtn() {
    return cy.get("button[name = 'next_btn']");
  }
  get modalBodyConfirmation() {
    return cy.get(".vs-c-modal--features-confirm-button");
  }
  get addNewBoard() {
    return cy.get(".vs-c-organization-boards__item--add-new");
  }

  AddOrganization(orgName) {
    this.orgName.type(orgName);
    this.nextBtn.click();
  }
}

export const addOrg = new AddOrganization();
