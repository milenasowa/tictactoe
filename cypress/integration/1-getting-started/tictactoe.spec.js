context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('check is click', () => {
     

        cy.get('#00').contains('X')
    })
    

    
})