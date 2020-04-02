describe('shared-ui-greeter', () => {
  beforeEach(() => cy.visit('/iframe.html?id=greetercomponent--primary'));

  it('should render the component', () => {
    cy.get('sharedstorybook-greeter').should('exist');
  });
});
