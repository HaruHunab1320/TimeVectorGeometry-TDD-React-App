describe('Creating an Icosahedron', () => {
  it('allows adding icosahedrons', () => {
    const icosahedronId = 3;
    const icosahedronName = 'FRESH START';

    cy.server({ force404: true });

    cy.route({
      method: 'GET',
      url: 'http://localhost:3001/icoHexSequences',
      response: [],
    });

    cy.route({
      method: 'POST',
      url: 'http://localhost:3001/icoHexSequences',
      response: {
        id: icosahedronId,
        name: icosahedronName,
      },
    }).as('addIcosahedron');

    cy.visit('/');

    cy.get('[placeholder="Add Icosahedron"]').type(icosahedronName);
    cy.contains('Add').click();

    cy.wait('@addIcosahedron').its('requestBody').should('deep.equal', {
      name: icosahedronName,
    });

    cy.contains(icosahedronName);
  });
});
