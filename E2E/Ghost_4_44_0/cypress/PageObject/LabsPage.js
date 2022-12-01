export class LabsPage{

    constructor(){
        this.labButton = '(//a[normalize-space()="Labs"])'
        this.clearButton = '//span[normalize-space()="Delete"]'
        this.deleteConfirm = '(//span[contains(text(),"Delete")])[2]'
        this.closedAlert= "//button[@class='gh-alert-close']//*[name()='svg']"
    }

    clearAdmin(){
        cy.xpath(this.labButton).click()
        cy.xpath(this.clearButton).click()
        cy.xpath(this.deleteConfirm).click()
        cy.xpath(this.closedAlert).click()
    }
}

export default new LabsPage();
