class MyInfoPage {

    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField:".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: ".oxd-button",
            nationalityField: "[type='submit']"
        }
        return selectors
    }
    fillPerdonalDetail(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmplyDetails(employId, otherId, driversLicense, drivesLicenseDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(drivesLicenseDate)
        cy.get(this.selectorsList().nationalityField).eq(0).click()
        cy.get(':nth-child(27)').click()
    }

    saveForm(){
    cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    }
    }

export default MyInfoPage