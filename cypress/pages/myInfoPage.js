class MyInfoPage {

    selectorsList(){
        const selectors = {
        submitButton: "[type='submit']",
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField:"[name='lastName']",
        genericField: ".oxd-input--active",
        dateField:"[placeholder='yyyy-dd-mm']",
        dateCloseButton: ".--close",
        comboBox: "[tabindex='0']",
        wrongCredentialAlert: "[role='alert']"

    }
        return selectors
    }

    fillPersonalDetails (firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmplloyeeDetails(employeeID, otherId, driversLicenceNumber){
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
    cy.get(this.selectorsList().dateField).eq(0).click()
    cy.get(':nth-child(17) > .oxd-calendar-date').click()
    cy.get(this.selectorsList().dateCloseButton).click()
    
    }

    saveForm(){
    cy.get(this.selectorsList().submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    }

    fillStatus(){
    cy.get(this.selectorsList().comboBox).eq(0).click()
    cy.get(':nth-child(5) > span').click()
    }

    customFields(testField){
    cy.get(this.selectorsList().genericField).eq(8).clear().type(testField)
    cy.get(this.selectorsList().comboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(this.selectorsList().comboBox).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(8)').click()
    cy.get(this.selectorsList().submitButton).eq(1).click({force:true})
    cy.get('body').should('contain', 'Successfully Saved')
    }

}
export default MyInfoPage