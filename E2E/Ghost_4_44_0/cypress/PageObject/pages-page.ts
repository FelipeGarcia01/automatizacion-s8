import takeScreenShot from '../utils/screenshots';
import { IStrategy } from '../support/strategy/i-strategy';

let config = require('../../config.json');

export class PagesPage{
    
    public strategy:IStrategy;
    public pagesUrl:string;
    public linkHref:string;
    public titlePlaceHolder:string;
    public contentIdent:string;
    public pagesListIdent:string; 
    public buttonPageSetting:string;
    public buttonDeletePage:string;
    public modalButtonDelete:string;
    public publishButton:string;
    public publishConfirm:string;
    public tagInput:string;
    public tagSelected:string;
    public screenshotPath:string; 
    public titleText:string; 
    public contentText:string; 


    constructor(){
        this.pagesUrl = config.siteHost+config.pages.pagesUrl;
        this.linkHref = config.pages.creator.linkHref;
        this.titlePlaceHolder = config.pages.creator.titlePlaceholder;
        this.contentIdent = config.pages.creator.contentIdentifier;
        this.pagesListIdent = config.pages.pagesListIdentifier;
        this.buttonPageSetting = config.pages.eraser.buttonSetting;
        this.buttonDeletePage = config.pages.eraser.buttonDelete;
        this.modalButtonDelete = config.pages.eraser.modalButtonConfirm;
        this.publishButton = config.pages.creator.publishButton;
        this.publishConfirm = config.pages.creator.publishConfirm;
        this.tagInput = config.pages.tagg.input;
        this.tagSelected = config.pages.tagg.selectorCheck;
        this.screenshotPath = config.pages.screenshotsPath;
    }

    resolveStrategy(strategy:IStrategy, tipo:string){
        if(tipo == ""){
            this.titleText = strategy.getShortString();
            this.contentText = strategy.getLargeString();
        }
        if(tipo == "naugthy"){
            this.titleText = strategy.getNaughtyString();
            this.contentText = strategy.getNaughtyString();
        }     
        if(tipo == "largeString"){
            this.titleText = strategy.getLargeString();
            this.contentText = strategy.getLargeString();
        }     
    }

    createNewPage(hadPublish){
        cy.visit(this.pagesUrl).then(()=>{
            takeScreenShot();
            this.openEditorView();
            this.fillPageContent();
            this.publishPage(hadPublish);
        });
    }

    openEditorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.getAttribute('href') == this.linkHref;
        }).first().click();
        takeScreenShot();
    }

    fillPageContent(){
        cy.get("textarea").filter((index,area)=>{
            return area.getAttribute("placeholder") == this.titlePlaceHolder;
        }).type(this.titleText);
        cy.get(this.contentIdent).click().type(this.contentText ,{force:true});
        takeScreenShot();
    }

    publishPage(hadPublish){
        if(hadPublish){
            cy.get(this.publishButton).click().then(()=>{
                takeScreenShot();
                cy.get(this.publishConfirm).click();
                takeScreenShot();
            });
        }
    }

    validExistence(url, exist, tagName = ""){
        url = url+"/";
        cy.visit(this.pagesUrl).then(async ()=>{
            if(Cypress.$(this.pagesListIdent).length > 0){
                cy.get(this.pagesListIdent).filter((index,elementLink)=>{
                    return url == elementLink.getAttribute("href");
                }).should('have.length', exist?1:0)
                .and('contain',tagName);
            }
            takeScreenShot();
        })  
    }

    deletePage(pageLink){
        cy.visit(pageLink).then(()=>{
            takeScreenShot();
            cy.get(this.buttonPageSetting).click({force:true}).then(()=>{
                takeScreenShot();
                cy.get(this.buttonDeletePage).click({force:true});
                takeScreenShot();
                cy.get(this.modalButtonDelete).click({force:true});
                takeScreenShot();
            });
        });
    }

    addTag(tagName){
        cy.get(this.buttonPageSetting).click({force:true}).then(()=>{
            cy.get(this.tagInput).type(tagName).then(()=>{
                cy.get(this.tagSelected).first().click();
                takeScreenShot();
            });
        });
    }

    checkUserView(){
        let publicPageUrl = config.siteHost+(this.titleText.replaceAll(" ","-"));
        cy.visit(publicPageUrl).contains(this.titleText);
        takeScreenShot();
    }
}