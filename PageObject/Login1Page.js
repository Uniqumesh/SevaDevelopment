/// <reference types = "cypress" />

class Login1Page
{
    visit(){
        cy.visit('https://demo.nopcommerce.com/login')
    }

    fillEmail(value)
    {
        const field = cy.get('#Email')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field2 = cy.get('#Password')
        field2.clear()
        field2.type(value)
        return this
    }

    Submit()
    {
        const button =cy.get('form > .buttons > .button-1')
        button.click()
    
    }

}
export default Login1Page
