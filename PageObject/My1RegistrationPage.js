/// <reference types = "cypress" />

class My1RegistrationPage
{
    visit1(){ //navigates to url
        cy.visit('https://demo.nopcommerce.com/')
    }

    clickRegisterbtn() //click on the register button
    {
        const button = cy.get('.ico-register')
        button.click()
    }

    checkMGender() //tick on the Male Gender
    {
        cy.get("#gender-male").check().should('be.checked')
    }

    checkFGender() //tick on the Female Gender
    {
        cy.get("#gender-female").check().should('be.checked')
    }
    
    fillFname(value) //enters first name
    {
        const field = cy.get('#FirstName')
        field.clear()
        field.type(value)
        return this
    }

    fillLname(value) //enters last name
    {
        const field = cy.get('#LastName')
        field.clear()
        field.type(value)
        return this
    }

    chooseBDay() //chooses Birth Day as 6
    {
        cy.get('[name="DateOfBirthDay"]').select('6')        
    }

    chooseBDate() //chooses Birth Date as April
    {
        cy.get('[name="DateOfBirthMonth"]').select('April')
    }

    chooseBYear() //chooses Birth Year as 1991
    {
        cy.get('[name="DateOfBirthYear"]').select('1991')
    }

    fillEmail1(value) //enters email address
    {
        const field = cy.get('#Email')
        field.clear()
        field.type(value)
        return this
    }

    fillCompany1(value) //enters company name
    {
        const field = cy.get('#Company')
        field.clear()
        field.type(value)
        return this
    }

    uncheckNewsletter() //uncheck the Newsletter
    {
        cy.get("#Newsletter").uncheck().should('not.be.checked')
    }

    fillPassword1(value) //enters the password
    {
        const field = cy.get('#Password')
        field.clear()
        field.type(value)
        return this
    }
    
    fillConfirmPassword1(value) //confirms the password
    {
        const field = cy.get('#ConfirmPassword')
        field.clear()
        field.type(value)
        return this
    }

    clickRegisterbtn1() //clicks on Register button
    {
        const button1 = cy.get('#register-button')
        button1.click()
    }  
    
}

export default My1RegistrationPage //export PO to respective called files
