import { IStrategy } from "../support/strategy/i-strategy";
import takeScreenShot from "../utils/screenshots";

let config = require('../../config.json')

export class LoginPage{

    public logInUrl:string;
    public usrTag:string;
    public usrText:string;
    public pssTag:string;
    public pssText:string;
    public actionElement:string;
    public actionTag:string;
    public adminUrl:string;
    public screenshotPath:string;

    constructor(){
        this.logInUrl = config.siteHost+config.logIn.logInUrl;
        this.usrTag = config.logIn.userTagIdentifier;
        this.pssTag = config.logIn.passTagIdentifier;
        this.actionElement = config.logIn.actionElement;
        this.actionTag = config.logIn.actionElement;
        this.adminUrl = config.siteHost+config.logIn.nextUrlExpected;
        this.screenshotPath = config.logIn.screenshotsPath;
        this.usrText = config.logIn.userName;
        this.pssText = config.logIn.userPass;
    }

    resolveStrategy(strategy:IStrategy, tipo:string = "pssEmpty"){
        
        if(tipo == "pssEmpty"){
            this.usrText = strategy.getLargeString();
            this.pssText = '';
        }
        if(tipo == "shortString"){
            this.usrText = strategy.getShortString();
            this.pssText = '';
        }     
        if(tipo == "largeStringPss"){
            this.usrText = "";
            this.pssText = strategy.getLargeString();
        }     
        if(tipo == "shortStringPss"){
            this.usrText = "";
            this.pssText = strategy.getShortString();
        }     
        if(tipo == "shortStringBoth"){
            this.usrText = strategy.getShortString();
            this.pssText = strategy.getShortString();
        }     
        if(tipo == "largStringBoth"){
            this.usrText = strategy.getLargeString();
            this.pssText = strategy.getLargeString();
        }    
    }

    doFailLogIn() {
        cy.visit(this.logInUrl);

        if (typeof(this.usrText) !== void 0 && this.usrText != ''){
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
        takeScreenShot();
        cy.get(this.actionTag).click({multiple: true, timeout:2000}).then(() =>{
            cy.url().should('eq',this.adminUrl);
            takeScreenShot();    
        });
    }
}