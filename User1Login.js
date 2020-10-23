/// <reference types = "cypress" />
import LoginPage from '../examples/PageObject/LoginPage'
describe ('Login Page', function(){
    it ('User Login', function()
    {
        const login= new LoginPage;                    
            login.visit()
            login.fillEmail('sevanewuser1@test.com')
            login.fillPassword('admin1')
            login.Submit()
     })
    
})
