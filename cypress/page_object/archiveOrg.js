class ArchiveOrg {
  get setingsBtn() {
    return cy.get(".vs-c-site-logo").eq(8);
  }
  get archiveBtn() {
    return cy.get(".vs-c-btn").eq(-2);
  }
  get confirmBtn() {
    return cy.get(".el-button--success");
  }
  get background() {
    return cy.get(".vs-l-archived");
  }
  get deleteOrgBtn() {
    return cy.get("button");
  }
  get img() {
    return cy.get("img");
  }
}

export const archiveOrg = new ArchiveOrg();
