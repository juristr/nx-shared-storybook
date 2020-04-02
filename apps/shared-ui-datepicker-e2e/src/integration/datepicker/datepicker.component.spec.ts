describe('shared-ui-datepicker', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepickercomponent--primary'));

  it('should render the component', () => {
    cy.get('sharedstorybook-datepicker').should('exist');
  });
});
