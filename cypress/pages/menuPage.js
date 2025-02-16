class MenuPage {

    selctorsList(){
        const slectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return slectors
    }

    accessMyInfo(){
        cy.get(this.selctorsList().myInfoButton).click()
    }
}

export default MenuPage