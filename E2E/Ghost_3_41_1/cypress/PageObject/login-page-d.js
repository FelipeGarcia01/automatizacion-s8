let config = require('../../config.json');

export class LoginPage{

    constructor(usrText, pssText){
        this.logInUrl = config.siteHost+config.logIn.logInUrl;
        this.usrTag = config.logIn.userTagIdentifier;
        this.usrText = usrText;
        this.pssTag = config.logIn.passTagIdentifier;
        this.pssText = pssText;
        this.actionElement = config.logIn.actionElement;
        this.actionTag = config.logIn.actionElement;
        this.adminUrl = config.siteHost+config.logIn.nextUrlExpected;
        this.screenshotPath = config.logIn.screenshotsPath;
    }

    doFailLogIn() {
        cy.visit(this.logInUrl);

        if (typeof(this.userText) !== void 0 && this.usrText != ''){
            cy.get(this.usrTag).type(this.usrText, { parseSpecialCharSequences: false });
        }

        if (typeof(this.pssText) !== void 0 && this.pssText != ''){
            cy.get(this.pssTag).type(this.pssText, { parseSpecialCharSequences: false });
        }

        cy.get(this.actionTag).click({multiple: true, timeout:2000}).then(() =>{
            cy.url().should('eq',this.logInUrl);  
        });

        cy.get(this.actionTag).click({multiple: true, timeout:2000}).then(() =>{
            cy.get('p[class="main-error"]').should('be.visible');
        });
    }

    doLogIn() {
        cy.visit(this.logInUrl);
        cy.get(this.usrTag).type(this.usrText);
        cy.get(this.pssTag).type(this.pssText);
        cy.get(this.actionTag).click({multiple: true, timeout:2000}).then(() =>{
            cy.url().should('eq',this.adminUrl);   
        });
    }
}