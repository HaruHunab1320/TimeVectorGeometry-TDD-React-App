describe('Listing Icos', () => {
  it('shows first hex name of ico sequence from the server', () => {
    const creativeGenesis = 'CREATIVE GENESIS';
    const primalMatrix = 'PRIMAL MATRIX';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: 'localhost:3000/icoHexSequences',
      response: [
        { id: 1, name: creativeGenesis },
        { id: 2, name: primalMatrix },
      ],
    });

    cy.visit('/');
    cy.contains(creativeGenesis);
    cy.contains(primalMatrix);
  });
});
