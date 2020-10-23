/// <reference types = "cypress"/>
import My1RegistrationPage from './PageObject/My1RegistrationPage'

describe ('Registration Page', function(){
    it('Resistering Users', function(){
        const reg= new My1RegistrationPage()
            reg.visit1()
            reg.clickRegisterbtn()   
            reg.fillFname('UserFirstName')
            reg.fillLname('UserLastName')
            reg.checkMGender()
            reg.chooseBDate()
            reg.chooseBDay()
            reg.chooseBYear()
            reg.fillEmail1('sevanewuser1@test.com')
            reg.fillCompany1('Seva Company')
            reg.uncheckNewsletter()
            reg.fillPassword1('admin1')
            reg.fillConfirmPassword1('admin1')
            reg.clickRegisterbtn1()

    })
})
