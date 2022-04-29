context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('win game as X in first row', () => {

        cy.get('#00').should('not.have.value')
        cy.get('#00').click()
        cy.get('#00').contains("X")

        cy.get('#10').should('not.have.value')
        cy.get('#10').click()
        cy.get('#10').contains("O")

        cy.get('#01').should('not.have.value')
        cy.get('#01').click()
        cy.get('#01').contains("X")

        cy.get('#11').should('not.have.value')
        cy.get('#11').click()
        cy.get('#11').contains("O")

        cy.get('#02').should('not.have.value')
        cy.get('#02').click()
        cy.get('#02').contains("X")

        cy.get('#line-row-one').should('have.css', 'display', 'block')

    })






})

