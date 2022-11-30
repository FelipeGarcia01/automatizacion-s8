import takeScreenShot from "../utils/screenshots";

let config = require('../../config.json');

export class TagPage{

    public tagUrl:string;
    public linkHref:string;
    public linkTitle:string;
    public tagName:string;
    public tagNameText:string;
    public tagSlug:string;
    public tagSlugText:string;
    public saveButton:string;
    public tagsListIdentifier:string;
    public tagGenUrl:string;

    constructor(){
        this.tagUrl = config.siteHost + config.tags.tagsUrl;
        this.linkHref = config.tags.creator.linkHref;
        this.linkTitle = config.tags.creator.linkTitle;
        this.tagName = config.tags.creator.body.tagName;
        this.tagNameText = config.tags.creator.body.tagNameText;
        this.tagSlug = config.tags.creator.body.tagSlug;
        this.tagSlugText = config.tags.creator.body.tagSlugText;
        this.saveButton = config.tags.creator.saveButton;
        this.tagsListIdentifier = config.tags.tagsListIdentifier;
        this.tagGenUrl = this.tagUrl+"/"+this.tagNameText.replaceAll(" ","-");
    }

    createNewTag(){
        cy.visit(this.tagUrl).then(async ()=>{
            takeScreenShot();
            this.openCreatorView();
            this.saveTagContent();
        });
    }

    openCreatorView(){ 
        cy.get('a').filter((index,link)=>{
            return link.getAttribute("href") == this.linkHref;
        }).first().click();
        takeScreenShot();
    }

    saveTagContent(){
        cy.get(this.tagName).type(this.tagNameText);
        cy.get(this.saveButton).click().then(()=>{
            takeScreenShot();
            cy.visit(this.tagUrl);
            takeScreenShot();
        });
    }

    validExistence(exist){
        cy.url().then(()=>{
            let url = this.tagGenUrl + "/";
            cy.visit(this.tagUrl).then(async ()=>{
                if(Cypress.$(this.tagsListIdentifier).length > 0){
                    cy.get(this.tagsListIdentifier).filter((index,elementLink)=>{
                        return url == elementLink.getAttribute("href")
                    }).should('have.length', exist?1:0);
                }
            });
            
            takeScreenShot();
        })

    }

}