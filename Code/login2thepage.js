/// <reference types = "cypress" />
import LoginPage from '../examples/pageObj2/LoginPage'
import logingPage from './pageObject/loginPagePOM'

describe('Test Suite', function(){

    it('Valid Login Test', function(){
        
        const lp=new LoginPage()
        lp.visit()                                                          //entering the url
        lp.fillEmail('test123@test.com')                                    //entering the email address
        lp.fillPassword('admin1')                                           //entering the password
        lp.Submit()                                                         //clicking on Submit button
        cy.title().should('be.equal','nopCommerce demo store')              //verifying the login dashboard
    })
})