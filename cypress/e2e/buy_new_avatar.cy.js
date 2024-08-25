describe('покупка аватара', function () {

    it('e2e покупки аватара', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('login');
         cy.get('#password').type('password');
         cy.get('.auth__button').click();
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.wait(3000);
         cy.get('[href="/shop"]').click({ force: true })
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('german dolnikov');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
     })
 }) 